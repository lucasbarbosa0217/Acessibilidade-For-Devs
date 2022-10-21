loginBtn = document.getElementById("loginClick");

if (isLogged) {
  loginBtn.innerHTML = "Sair";
}

loginBtn.addEventListener("click", () => {
  if (isLogged) {
    if (window.confirm("Tem certeza disso?")) {
      localStorage.removeItem("TOKEN_KEY");
      localStorage.removeItem("USERNAME");

      HttpClient.api.defaults.headers.common.Authorization = undefined;
      window.location.reload();
    }
  } else {
    location.replace("./login.html");
  }
});
