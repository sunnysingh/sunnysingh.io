import React from 'react';

export default function CodePenEmbed({ id, height }) {
  const embedLink = `//codepen.io/Craaftx/embed/preview/${id}/?height=${height ||
    400}&theme-id=dark&default-tab=css,result`;
  return (
    <div
      className="codepenEmbed mediaEmbed"
      style={{
        position: 'relative',
        paddingBottom: '56.25%',
        width: `100%`,
        height: 0,
      }}
    >
      <iframe
        width={height || 400}
        height={height || 400}
        src={embedLink}
        frameBorder="0"
        allowTransparency
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
