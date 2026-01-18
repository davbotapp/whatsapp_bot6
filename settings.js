const settings = { 
  packname: 'Davbot ',
  author: 'Ir David Mpongo',
  botName: "Davbot",
  botOwner: 'david mpongo', // ton nom
  ownerNumber: '2547xxxxxx',   // ton numéro (sans +, country code inclus)
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: "public",       // public = tout le monde peut utiliser les commandes
  description: "Bot pour gérer les groupes et automatiser les tâches.",
  version: "3.0.0",

  // 🔹 Options importantes pour groupe
  botAdmin: true,              // Le bot doit être admin pour kick/ban/antilink
  listenGroup: true,           // Écoute tous les messages de groupe
  onlyInbox: false,            // false = accepte les commandes dans les groupes
  antiLink: true,              // active l'anti-link par défaut
  antiBadWord: true,           // active le filtre de mots interdits par défaut
  welcome: true,               // messages de bienvenue activés
  goodbye: true,               // messages d'au revoir activés
};

module.exports = settings;
