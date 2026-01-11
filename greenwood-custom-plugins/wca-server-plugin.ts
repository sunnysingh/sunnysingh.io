import path from 'node:path';
import type { ServerPlugin, Compilation } from '@greenwood/cli';
import chokidar, { type FSWatcher } from 'chokidar';
import ts from 'typescript';
import {
  analyzeSourceFile,
  transformAnalyzerResult,
} from 'web-component-analyzer';

class WebComponentAnalyzerServer {
  compilation: Compilation;
  watcher: FSWatcher | undefined;

  constructor(compilation: Compilation) {
    this.compilation = compilation;
  }

  createTsProgram() {
    const { projectDirectory } = this.compilation.context;

    const configPath = ts.findConfigFile(
      projectDirectory.pathname,
      ts.sys.fileExists.bind(globalThis),
      'tsconfig.json'
    );

    if (!configPath) throw new Error('Unable to find tsconfig.json');

    const configFile = ts.readConfigFile(
      configPath,
      ts.sys.readFile.bind(globalThis)
    );

    if (configFile.error) {
      throw new Error(
        ts.flattenDiagnosticMessageText(configFile.error.messageText, '\n')
      );
    }

    const parsedConfig = ts.parseJsonConfigFileContent(
      configFile.config,
      ts.sys,
      path.dirname(configPath)
    );

    if (parsedConfig.errors.length > 0) {
      for (const error of parsedConfig.errors) {
        console.error(ts.flattenDiagnosticMessageText(error.messageText, '\n'));
      }
      process.exit(1);
    }

    return ts.createProgram({
      rootNames: parsedConfig.fileNames,
      options: parsedConfig.options,
      projectReferences: parsedConfig.projectReferences!,
    });
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async start() {
    const { projectDirectory } = this.compilation.context;
    const tsProgram = this.createTsProgram();

    // TODO: Make path(s) configurable to watch.
    this.watcher = chokidar.watch(`${projectDirectory}/src/components`, {
      ignored: (path, stats) =>
        Boolean(stats?.isFile() && !path.endsWith('.ts')),
      persistent: true,
    });

    this.watcher.on('change', (changedFilePath) => {
      const sourceFile = tsProgram.getSourceFile(changedFilePath);

      if (!sourceFile) {
        throw new Error(`Unable to find source file for ${changedFilePath}`);
      }

      const result = analyzeSourceFile(
        // @ts-expect-error wca typescript version is different
        sourceFile,
        { program: tsProgram }
      );

      const output = transformAnalyzerResult(
        'vscode',
        result,
        // @ts-expect-error wca typescript version is different
        tsProgram
      );

      console.log('output', output);
    });
  }

  async stop() {
    await this.watcher?.close();
  }
}

export function wcaServerPlugin() {
  return {
    type: 'server',
    name: 'plugin-wca',
    provider: (compilation) => new WebComponentAnalyzerServer(compilation),
  } satisfies ServerPlugin;
}
