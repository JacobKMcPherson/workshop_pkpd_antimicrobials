const RevealPreviewLinks = window.RevealPreviewLinks || (function(){
  function init(deck){
    deck.on( 'ready', function() {
      document.querySelectorAll( '.reveal a[href]' ).forEach( link => {
        if( link.getAttribute( 'href' ).startsWith('http') ) {
          link.setAttribute( 'data-preview-link', '' );
        }
      });
    });
  }

  return {
    id: 'preview-links',
    init: init
  };
})();

Reveal.registerPlugin( 'preview-links', RevealPreviewLinks );
