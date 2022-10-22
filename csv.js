container = document.getElementById("main");

id = 1;
id = document.URL.split("=");

if (id.length > 1) {
  id = parseInt(id[1]);

  fetch(`content.json`)
    .then((data) => data.json())
    .then((data) => {
      container.innerHTML = data
        .find((x) => x.id === id)
        .content.replaceAll("$", `"`);
    })
    .catch((error) => {
      container.innerHTML = `<h1>Erro 404</h1> <p>${error}<p>`;
    });
}
