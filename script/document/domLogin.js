email = document.getElementById("email");
senha = document.getElementById("password");
form = document.getElementById("login");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    SessionsService.create(email.value, senha.value)
      .then((data) => {
        console.log(data)
        localStorage.setItem("TOKEN_KEY", data.token);

        HttpClient.api.defaults.headers.common.Authorization = getTokenStorage();
        window.alert("Login com sucesso");
        console.log(data.userName)
        localStorage.setItem("USERNAME", data.userName);
        window.location.href = "./index.html";
      })
      .catch((error) => {
        if (error.response.data.message == "INVALID_CREDENTIALS") {
          window.alert("Email ou senha incorretos");
        } else {
          window.alert(
            "Erro" + error.response.status + ": " + error.response.data[0]
          );
        }
        console.log(error);
      });
  });
  