// fake_script.js

console.log("👽 L'attaque de StarGate a commencé! 👽");

document.body.style.backgroundColor = '#0f0'; // Change la couleur de fond en vert
document.title = "Système Compromis par l'Intrus Galactique!";

const message = document.createElement('div');
message.innerHTML = `
  <h2 style="color: red;">🚨 Alerte: Intrusion Détectée! 🚨</h2>
  <p>Le système de StarGate a été compromis par une entité extraterrestre malveillante.</p>
  <p>Toutes les ressources sont temporairement réorientées pour contrer cette attaque.</p>
`;
document.body.prepend(message);
