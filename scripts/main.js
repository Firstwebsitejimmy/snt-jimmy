/*Pour les messages qui changent*/
const texts = ["Bienvenue à tous !", "Explorer sans limite !", "Ce site est crée par Jimmy.", "Ne vous faites pas Hacker ! :)"];
let index = 0;

function typeWriter(text, index) {
  let i = 0;
  const typingInterval = setInterval(() => {
    if (i <= text.length) {
      document.getElementById("typing-effect").innerHTML = text.slice(0, i);
      i++;
    } else {
      clearInterval(typingInterval);
      setTimeout(() => {
        eraseText(text);
      }, 1000); // Attendre avant d'effacer le texte
    }
  }, 100); // Délai entre l'affichage de chaque caractère
}

function eraseText(text) {
  let i = text.length;
  const erasingInterval = setInterval(() => {
    if (i >= 0) {
      document.getElementById("typing-effect").innerHTML = text.slice(0, i);
      i--;
    } else {
      clearInterval(erasingInterval);
      setTimeout(nextText, 500); // Attendre avant de passer au texte suivant
    }
  }, 50); // Délai entre l'effacement de chaque caractère
}


function nextText() {
  index = (index + 1) % texts.length; // Passer au texte suivant dans le tableau
  typeWriter(texts[index], index);
}

typeWriter(texts[index], index); // Commencer le processus
/*fin des message qui changent*/

/*
lien pour les boutons*/

document.getElementById("Accueil").addEventListener("click", function() {
    window.location.href = "index.html";
});

document.getElementById("lien_1").addEventListener("click", function() {
    window.location.href = "lien_1.html";
});

document.getElementById("lien_2").addEventListener("click", function() {
    window.location.href = "lien_2.html";
});

document.getElementById("lien_3").addEventListener("click", function() {
    window.location.href = "lien_3.html";
});

/*message personaliser*/
