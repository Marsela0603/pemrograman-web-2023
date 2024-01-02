const username = "marsela";
const password = "marsela2004";

function login() {
  let userInput = document.getElementById("username").value;
  let paswordInput = document.getElementById("password").value;
  let form = document.getElementById("form");

  if (userInput == username && paswordInput == password) {
    alert("Selamat \n Login berhasil ^^");
    form.submit();
  } else {
    alert("Waduch Login Gagal \nSilahkan coba lagi");
  }
}
