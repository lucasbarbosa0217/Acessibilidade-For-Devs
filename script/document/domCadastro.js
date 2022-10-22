form = document.getElementById("cadastro")
nameUser = document.getElementById("username");
emailUser = document.getElementById("email");
passwordUser = document.getElementById("password")
form.addEventListener("submit", () => {
    event.preventDefault();
  
    UsersService.create(
      nameUser.value,
      emailUser.value,
      passwordUser.value,

    )
      .then(() => {
        window.alert("Usuário criado!");
        window.location.href = "./login.html";
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  });
  