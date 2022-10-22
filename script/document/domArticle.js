const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
id = urlParams.get("id");

title = document.getElementById("titleArticle");
content = document.getElementById("contentArticle");

if (id != null) {
  PostsService.readById(id)
    .then((data) => {
      title.innerHTML = data.title;
      conteudo = data.content.replaceAll("$", `"`);
      conteudoFinal = conteudo.replaceAll("\\n", "");
      content.innerHTML = conteudoFinal;
    })
    .catch((error) => {
      title.innerHTML = "ERRO 404";
      content.innerHTML = "" + error.response.data.message;
    });
}

daltonismo = [];
geral = [];
cegueira = [];
dislexia = [];
surdez = [];

PostsService.readAll().then((data) => {
  data.forEach((element) => {
    if (element.category.name == "Daltonismo") {
      daltonismo.push(element);
    } else if (element.category.name == "Geral") {
      geral.push(element);
    } else if (element.category.name == "Cegueira") {
      cegueira.push(element);
    } else if (element.category.name == "Surdez") {
      surdez.push(element);
    } else {
      dislexia.push(element);
    }
  });

  listDaltonismo = document.getElementById("Daltonismo");
  listGeral = document.getElementById("Geral");
  listCegueira = document.getElementById("Cegueira");
  listSurdez = document.getElementById("Surdez");
  listDislexia = document.getElementById("Dislexia");

  daltonismo.forEach((element) => {
    conteudo = `
                        <li><a href="content.html?id=${element.id}">${element.title}</a></li>
            `;
    listDaltonismo.innerHTML += conteudo;
  });

  geral.forEach((element) => {
    conteudo = `
                        <li><a href="content.html?id=${element.id}">${element.title}</a></li>
            `;
    listGeral.innerHTML += conteudo;
  });

  cegueira.forEach((element) => {
    conteudo = `
                        <li><a href="content.html?id=${element.id}">${element.title}</a></li>
            `;
    listCegueira.innerHTML += conteudo;
  });

  surdez.forEach((element) => {
    conteudo = `
                        <li><a href="content.html?id=${element.id}">${element.title}</a></li>
            `;
    listSurdez.innerHTML += conteudo;
  });

  dislexia.forEach((element) => {
    conteudo = `
                        <li><a href="content.html?id=${element.id}">${element.title}</a></li>
            `;
    listDislexia.innerHTML += conteudo;
  });
});
