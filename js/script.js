const entrada = document.querySelector("#texto");
const botonEncriptar = document.querySelector("#encriptar");
const botonDesencriptar = document.querySelector("#desencriptar");
const sinTexto = document.querySelector("#sin-texto");
const salida = document.querySelector("#resultado");
const botonCopiar = document.querySelector("#copiar");

const re = /^[a-z ]+$/;
const llavesEncriptacion = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat"
};

// Función para encriptar texto
function encriptarTexto(texto) {
  if (re.test(texto)) {
    let textoEncriptado = "";
    for (let letra in texto) {
      if (llavesEncriptacion[texto[letra]]) {
        textoEncriptado += llavesEncriptacion[texto[letra]];
      } else {
        textoEncriptado += texto[letra];
      };
    };
    entrada.value = '';
    return textoEncriptado;
  } else {
    return "ENCRYPTION ERROR: ¡El texto debe estar en minúscula y no poseer acentos ni caracteres especiales para poder ser encriptado!";
  };
};

// Función para desencriptar texto
function desencriptarTexto(textoEncriptado) {
  let texto = "";
  let i = 0;
  if (re.test(textoEncriptado)) {
    while (i < textoEncriptado.length) {
      let letra = textoEncriptado.substring(i, i + 1);

      if (llavesEncriptacion[letra]) {
        let llave = llavesEncriptacion[letra];
        texto += letra;
        i += llavesEncriptacion[letra].length;
      } else {
        texto += letra;
        i++;
      };
    };
  } else {
    texto =
      "DECRYPTION ERROR: ¡El texto debe estar en minúscula y no poseer acentos ni caracteres especiales para poder ser desencriptado!";
  };
  entrada.value = '';
  return texto;
};

// Función para mostrar el texto encriptado en el campo de salida
botonEncriptar.addEventListener("click", function() {
  salida.value = encriptarTexto(entrada.value);
  sinTexto.style.display = 'none';
  salida.style.display = 'block';
  botonCopiar.style.display = 'block';
});

// Función para mostrar el texto desencriptado en el campo de salida
botonDesencriptar.addEventListener("click", function() {
  salida.value = desencriptarTexto(entrada.value);
  sinTexto.style.display = 'none';
  salida.style.display = 'block';
  botonCopiar.style.display = 'block';
});

// Función para copiar el resultado al portapapeles
botonCopiar.addEventListener("click", function() {
  navigator.clipboard.writeText(salida.value)
  .then(() => {
    alert('Texto copiado al portapapeles');
  })
  .catch(err => {
    alert('Error al copiar al portapapeles:', err);
  })
});
