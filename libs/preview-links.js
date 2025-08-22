// Minimal preview-links plugin for Reveal.js (works with Quarto)
(function () {
  // Inject minimal CSS so the preview is visible
  const style = document.createElement('style');
  style.textContent = `
    .rl-preview {
      position: fixed;
      right: 2rem;
      bottom: 2rem;
      width: min(60vw, 900px);
      height: min(60vh, 600px);
      background: #fff;
      border: 1px solid #ccc;
      box-shadow: 0 10px 30px rgba(0,0,0,.25);
      border-radius: 8px;
      overflow: hidden;
      z-index: 9999;
    }
    .rl-preview iframe {
      width: 100%;
      height: 100%;
      border: 0;
      display: block;
      background: #fafafa;
    }
    .rl-preview-close {
      position: absolute;
      top: 6px;
      right: 10px;
      font: 14px/1 system-ui, sans-serif;
      background: rgba(0,0,0,.6);
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 4px 8px;
      cursor: pointer;
      z-index: 2;
    }
  `;
  document.head.appendChild(style);

  function canPreview(url) {
    // Many sites block embedding; local/relative links are safest
    try { new URL(url); return true; } catch { return true; }
  }

  function toEmbeddable(url) {
    // Make common embeds nicer (e.g., YouTube watch -> embed)
    try {
      const u = new URL(url, window.location.href);
      if (u.hostname.includes('youtube.com') && u.pathname === '/watch' && u.searchParams.get('v')) {
        return `https://www.youtube.com/embed/${u.searchParams.get('v')}`;
      }
      return u.toString();
    } catch { return url; }
  }

  function showPreview(href) {
    // Remove existing
    document.querySelectorAll('.rl-preview').forEach(n => n.remove());

    const wrap = document.createElement('div');
    wrap.className = 'rl-preview';

    const btn = document.createElement('button');
    btn.className = 'rl-preview-close';
    btn.textContent = 'Close';
    btn.addEventListener('click', () => wrap.remove());
    wrap.appendChild(btn);

    const iframe = document.createElement('iframe');
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.loading = 'lazy';
    iframe.src = toEmbeddable(href);
    wrap.appendChild(iframe);

    document.body.appendChild(wrap);
  }

  function attach(root) {
    root.querySelectorAll('.reveal a[href]').forEach(a => {
      if (a.dataset.rlBound) return;            // avoid duplicate binding
      a.dataset.rlBound = '1';

      // Activate only if explicitly marked OR external http(s)
      const explicit = a.hasAttribute('data-preview-link');
      const href = a.getAttribute('href') || '';
      const external = /^https?:\/\//i.test(href);

      if (!(explicit || external)) return;

      a.addEventListener('click', (e) => {
        // Allow Cmd/Ctrl-click to open in new tab as usual
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        if (canPreview(href)) showPreview(href);
      });
    });
  }

  // Work with or without explicit plugin registration
  if (window.Reveal && typeof window.Reveal.on === 'function') {
    Reveal.on('ready', () => attach(document));
    Reveal.on('slidechanged', () => attach(document));
  } else {
    // Fallback if Reveal isn’t ready yet
    document.addEventListener('DOMContentLoaded', () => attach(document));
  }
})();
