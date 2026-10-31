// Dual Frame Creative — menu, video player, and form confirmation.
// Without this file the menu links stay in the footer, clips open on YouTube, and the form still posts.
(function () {
  // Phone menu
  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  if (menuBtn && menu) {
    var setMenu = function (open) {
      menu.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.textContent = open ? 'Close' : 'Menu';
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) menu.querySelector('a').focus();
    };
    menuBtn.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); menuBtn.focus(); }
    });
  }

  // Press-to-play clips: open the Short in a dialog
  var player = document.getElementById('player');
  if (player && typeof player.showModal === 'function') {
    var frame = player.querySelector('.player-frame');
    var close = function () { player.close(); };
    player.addEventListener('close', function () { frame.replaceChildren(); });
    player.querySelector('.player-close').addEventListener('click', close);
    player.addEventListener('click', function (e) { if (e.target === player) close(); });
    document.querySelectorAll('a.clip[data-yt]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube-nocookie.com/embed/' + link.dataset.yt + '?autoplay=1&rel=0';
        iframe.title = link.getAttribute('aria-label') || 'Client video';
        iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        frame.appendChild(iframe);
        player.showModal();
      });
    });
  }

  // Contact form: formsubmit redirects back with ?submitted=true
  var contact = document.querySelector('.form-card');
  if (contact && new URLSearchParams(location.search).get('submitted') === 'true') {
    contact.classList.add('is-sent');
  }
})();
