# Infos Maison — module TizenBrew

Ouvre l'écran **Infos Maison** de Home Assistant (`/tv-infos/infos`) en plein écran sur la TV Samsung, sans barre latérale ni en-tête.

## Installation
1. Créer un dépôt GitHub public nommé `tizenbrew-ha-infos` et y déposer `package.json`, `inject.js` et ce README.
2. Sur la TV, ouvrir TizenBrew → **Module Manager** → ajouter le module GitHub `TON-PSEUDO/tizenbrew-ha-infos`.
3. Lancer **Infos Maison** une première fois et se connecter à Home Assistant avec la télécommande.
4. Dans les réglages de TizenBrew, choisir **Infos Maison** comme module lancé automatiquement (autolaunch), pour que Home Assistant puisse l'ouvrir directement.

L'adresse de Home Assistant est `http://192.168.1.7:8123`. Si elle change, modifier `websiteURL` dans `package.json`.
