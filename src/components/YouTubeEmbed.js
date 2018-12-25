import React from 'react';

export default function YouTubeEmbed({ id, width, caption }) {
  const Container = props =>
    caption ? <figure {...props} /> : <div {...props} />;
  const embedLink = `https://www.youtube.com/embed/${id}`;
  return (
    <Container className="youtubeEmbed mediaEmbed">
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          width: `100%`,
          height: 0,
        }}
      >
        <iframe
          width={width || 800}
          height={width || 800}
          src={embedLink}
          frameBorder="0"
          allow="autoplay; encrypted-media"
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
      {caption && <figcaption>{caption}</figcaption>}
    </Container>
  );
}
