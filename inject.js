// Infos Maison — mode kiosque pour Home Assistant dans TizenBrew
// Masque la barre latérale et l'en-tête de HA pour un affichage plein écran.
(function () {
  // Écran du matin (page /local/…) : il gère lui-même sa taille, on n'y touche pas
  if (location.pathname.indexOf('/local/') === 0) {
    if (document.body) document.body.style.zoom = '';
    return;
  }
  try {
    if (localStorage.getItem('dockedSidebar') !== '"always_hidden"') {
      localStorage.setItem('dockedSidebar', '"always_hidden"');
      localStorage.setItem('selectedTheme', '{"theme":"default","dark":true}');
      location.reload();
      return;
    }
  } catch (e) {}
 
  function sr(el) { return el && el.shadowRoot; }
  function q(root, sel) { return root ? root.querySelector(sel) : null; }
 
  function addStyle(root, id, css) {
    if (!root || q(root, '#' + id)) return;
    var s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    root.appendChild(s);
  }
 
  function apply() {
    var ha = q(document, 'home-assistant');
    var main = q(sr(ha), 'home-assistant-main');
    var mainRoot = sr(main);
    var drawer = q(mainRoot, 'ha-drawer');
    addStyle(sr(drawer), 'kiosk-drawer', 'aside, .mdc-drawer { display: none !important; } .mdc-drawer-app-content { margin-left: 0 !important; padding-left: 0 !important; }');
    addStyle(mainRoot, 'kiosk-main', 'ha-sidebar { display: none !important; } ha-drawer { --mdc-drawer-width: 0px !important; }');
    // Agrandit l'affichage pour une lecture depuis le canapé
    if (document.body && document.body.style.zoom !== '1.3') document.body.style.zoom = '1.3';
 
    var panel = q(mainRoot, 'ha-panel-lovelace') || q(q(mainRoot, 'partial-panel-resolver'), 'ha-panel-lovelace');
    var root = q(sr(panel), 'hui-root');
    addStyle(sr(root), 'kiosk-root', '.header, .toolbar, app-header, app-toolbar, ha-top-app-bar-fixed { display: none !important; } #view, hui-view, hui-view-container { padding-top: 0 !important; margin-top: 0 !important; min-height: 100vh !important; }');
  }
 
  setInterval(apply, 1000);
  document.addEventListener('DOMContentLoaded', apply);
})();
 
