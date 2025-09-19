const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

const gifs = [
  "./resources/catt.gif",
  "./resources/cat-cat-meme.gif",
  "./resources/gato-cat.gif",
  "./resources/cat-crying-cat.gif",
  "./resources/sadhamstergirl.gif.gif",
  "./resources/sweet-personality.gif"
];

// to load the gifs faster
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// changes for when NO button is clicked
no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "./resources/cat-cat-meme.gif";
    text.innerHTML = "Quisiste decirte que sí, no? (⋟﹏⋞)";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "./resources/gato-cat.gif";
    text.innerHTML = "Se te fue la mano, cierto?🥺";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "./resources/cat-crying-cat.gif";// gif credit: https://tenor.com/view/cat-kitty-gif-25340141
    text.innerHTML = "Voy a llorar 。゜゜(´Ｏ`) ゜゜。";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;

    const btn = document.querySelector('.no');

    function mover() {
      const x = Math.random() * 80; // porcentaje de la pantalla
      const y = Math.random() * 80;
      btn.style.position = 'absolute';
      btn.style.left = x + '%';
      btn.style.top = y + '%';
    }

    btn.addEventListener('mouseenter', mover);

    // ➜ añadido: huir también al hacer click
    btn.addEventListener('click', mover);

    
  } 
  // else if (count == 5) {
  //   gif.src = "./resources/sadhamstergirl.gif";// gif credit: https://tenor.com/view/cat-gif-10173437195524493032
  //   text.innerHTML = "Por fiss🥺";
  //   yes.style.height = "90%";
  //   yes.style.width = "96%";
  //   no.style.display = "none";
  //  }
  // referencia al botón


});

// changes for when YES button is clicked
yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "./resources/sweet-personality.gif";// gif credit: https://tenor.com/view/peach-cat-kiss-animated-love-mwah-gif-25743978
  text.innerHTML = "Lo sabía ᕙ(^▿^-ᕙ)";
  yes.innerHTML = '<a href="https://wa.me/573158114640" target="_blank">Escribeme</a>';// inside the " " put your social media profile link
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});
