const lightbox = GLightbox({
  loop: true,
  autoplayVideos: true,
  zoomable: true,
  controls: false,

  plyr: {
    css: 'https://cdn.plyr.io/3.5.6/plyr.css',
    js: 'https://cdn.plyr.io/3.5.6/plyr.js',
    config: {
      ratio: '16:9',
      muted: true,
      hideControls: true,
      controls: [], 
    }
  }
});
