const textoPrincipal = document.querySelector("#mainText");
const botonEncriptar = document.querySelector("#encriptar");
const textoSecundario = document.querySelector("#rectangleText2");
const botonDesencriptar = document.querySelector("#desencriptar");
const botonCopiar = document.querySelector("#copiar");
const ocultarImg = document.querySelector("#mainImg");
const ocultarRectangleText = document.querySelector("#rectangleText1");



botonEncriptar.addEventListener("click", encrypt);
botonEncriptar.addEventListener("click", hideImgAndText);
botonEncriptar.addEventListener("click", showCopyButton);
botonEncriptar.addEventListener("click", makeTextBigger);
botonDesencriptar.addEventListener("click", desencrypt);
botonDesencriptar.addEventListener("click", showImgAndText);
botonDesencriptar.addEventListener("click", hideCopyButton);
botonDesencriptar.addEventListener("click", makeTextSmaller);
botonCopiar.addEventListener("click", copy);
textoPrincipal.addEventListener("input", autoResize, false);
textoSecundario.addEventListener("input", autoResize, false);

/*Botón Encriptar*/
function encrypt() {
  encryptingMessageA = textoPrincipal.value.replaceAll("a", "ai");
  encryptingMessageE = encryptingMessageA.replaceAll("e", "enter");
  encryptingMessageI = encryptingMessageE.replaceAll("i", "imes");
  encryptingMessageO = encryptingMessageI.replaceAll("o", "ober");
  encryptingMessageU = encryptingMessageO.replaceAll("u", "ufat");
  textoSecundario.value = encryptingMessageU;
  textoPrincipal.value = "";
}

function hideImgAndText() {
  ocultarImg.style.display = "none";
  ocultarRectangleText.style.display = "none";
}

function showCopyButton() {
  botonCopiar.style.display = "block";
}

function makeTextBigger() {
  textoSecundario.className = "bigTextArea";
}

/*Botón Desencriptar*/
function desencrypt() {
  encryptingMessageO = textoSecundario.value.replaceAll("ufat", "u");
  encryptingMessageI = encryptingMessageO.replaceAll("ober", "o");
  encryptingMessageE = encryptingMessageI.replaceAll("imes", "i");
  encryptingMessageA = encryptingMessageE.replaceAll("enter", "e");
  desencrypedMessage = encryptingMessageA.replaceAll("ai", "a");
  textoPrincipal.value = desencrypedMessage;
  textoSecundario.value = desencrypedMessage;
  mainImg.style.display = "block";
  rectangleText1.style.display = "block";
}

function showImgAndText() {
  ocultarImg.style.display = "block";
  ocultarRectangleText.style.display = "block";
}

function hideCopyButton() {
  botonCopiar.style.display = "block";
}

function makeTextSmaller() {
  textoSecundario.className = "";
}

/*Botón Copiar Texto*/
function copy() {
  navigator.clipboard.writeText(textoSecundario.value);
}

function autoResize() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}
