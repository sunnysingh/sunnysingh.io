import type { Config } from '@greenwood/cli';

import { wcaServerPlugin } from './greenwood-custom-plugins/wca-server-plugin.ts';

export default {
  devServer: {
    port: 3000,
  },
  plugins: [wcaServerPlugin()],
} satisfies Config;
