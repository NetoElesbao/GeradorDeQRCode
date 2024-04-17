// Selecionar elementos
const container = document.querySelector(".container");
const button = document.querySelector("#qr-form button");

const QrInput = document.querySelector("#qr-form input");

const imgQrCode = document.querySelector("#qr-code img"); //não estava achando
// Funções
const GenerateQrCode = () => {
  const qrCodeInput = QrInput.value;

  if (!qrCodeInput) return;

  button.innerText = "Gerando código...";

  imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInput}`;

  imgQrCode.addEventListener("load", () => {
    container.classList.add("active");
    button.innerText = "Código criado!";
  });
};

// Eventos
button.addEventListener("click", () => {
  GenerateQrCode();
});

QrInput.addEventListener("keydown", (button) => {
  if (button.code === "Enter") {
    GenerateQrCode();
  }
});

QrInput.addEventListener("keyup", () => {
  if (!QrInput.value) {
    container.classList.remove("active");
    button.innerText = "Gerar QR Code";
  }
});
