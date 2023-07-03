const body = document.querySelector("body");

const logo = document.createElement("img");

logo.id = "logo";
logo.src = "./assets/img/frutas.png";

body.appendChild(logo);

const title = document.createElement("h1");
title.id = "title";

const vida = document.createElement("span");
vida.id = "vida";
vida.innerText = "Vida";
const fruta = document.createElement("span");
fruta.id = "fruta";
fruta.innerText = "Fruta";

body.appendChild(title);
title.appendChild(vida);
title.appendChild(fruta);

const banana = document.createElement("p");
banana.className = "fruit";
banana.innerText = "Banana";

const morango = document.createElement("p");
morango.className = "fruit";
morango.innerText = "Morango";

const goiaba = document.createElement("p");
goiaba.className = "fruit";
goiaba.innerText = "Goiaba";

const pessego = document.createElement("p");
pessego.className = "fruit";
pessego.innerText = "Pêssego";

body.appendChild(banana);
body.appendChild(morango);
body.appendChild(goiaba);
body.appendChild(pessego);