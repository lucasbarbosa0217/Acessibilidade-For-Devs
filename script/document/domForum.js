listpost = document.getElementById("listpost");
listuser = document.getElementById("postuserlist");
namePlace = document.getElementById("username");


me= "";


ForumPostsService.readMe()
.then((data) => { 
    if(isLogged){
    console.log(data)
    namePlace.innerHTML = getUserName();
    configuraTelaUser(data)

}
    else{window.location.href = "./login.html"}
})
.catch((error) => {window.alert("Faça login para acessar essa área");window.location.href = "./login.html"})


if(page=="index"){
ForumPostsService.readAll()
.then((data) => configuraTela(data))
.catch((error) => {
   console.log(error);
  //  window.location.href = "./index.html"
} )}


function configuraTela(data){
    
    data.forEach(element => {
        console.log(element)
        pequeno = element.content.substring(0,50);
        console.log(listpost)
        post =  `
        <a href="forumpost.html?id=${element.id}">
        <div class="basepost">
        <div class="postforum">
            <i class="fa-solid fa-question"></i>
            <h3>${element.title}</h3>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
        <div class="contentforum">
            <hr>
            <P>${pequeno}...</P>
            <p class="infoforum">Pergunta feita por <b id="forumusername">${element.author.name}</b>, <b id="forumdate">${formatDate(element.createdAt)}</b></p>

        </div>
    </div>
    </a>
        `
        listpost.innerHTML += post
       
    });
}

function configuraTelaUser(data){
  if(data.length > 0){
    listuser.innerHTML = ""
    data.forEach(element => {
 
        postu =  `
        <a href="forumpost.html?id=${element.id}"><div class="userpostcard"><h3>${element.title}</h3><i class="fa-solid fa-arrow-right"></i></div></a>

        `
        listuser.innerHTML += postu
       
    });}
}


const formatDate = (apiDate) => {
    const date = apiDate.substring(0,10);
    const [year,month,day] = date.split('-');

    return `${day}/${month}/${year}`
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
id = urlParams.get("id")

if(page == "post"){
    if(isLogged){
    forumname = document.getElementById("forumname")
    forumusername = document.getElementById("forumusername")
    forumdate = document.getElementById("forumdate");
    contentforum = document.getElementById("contentforum");
    listanswer = document.getElementById("listanswer")
    ForumPostsService.readById(id)
    .then((data) => {
        console.log(data)
        configuraPost(data);
    })
    .catch((error) => {console.log(error)}) 

    comentario = document.getElementById("comentario");
    textarea = document.getElementById("caixa")
 
    comentario.addEventListener("submit", () => {

        event.preventDefault();

       ForumPostCommentsService.create(id, caixa.value)
        .then((data) => {window.alert("Comentário Feito")})
        .catch((error) => {windowa.alert("Erro ao fazer comentário")})
    })
    } else{window.location.href = "./login.html"}
}



function configuraPost(data){
    forumname.innerHTML = data.title;
    forumusername.innerHTML = data.author.name;
    forumdate.innerHTML = formatDate(data.createdAt);
    contentforum.innerHTML = data.content;
    quantresponsta = document.getElementById('quantresponsta');
    quantresponsta.innerHTML = data.comments.length;
    if(data.comments.length > 0){
        listanswer.innerHTML = "";
        comentarios = data.comments;
        comentarios.forEach((com) => {
            configuraComentario(com)
        })
    }
}

function configuraComentario(comentario){
    conteudo =
    `
    <div class="container answer">
        <p>${comentario.content}</p>           
        <p class="infoforum">Resposta feita por <b id="forumusername">${comentario.author.name}</b>, <b id="forumdate">${formatDate(comentario.updatedAt)}</b></p>
    </div>
    `

    listanswer.innerHTML += conteudo
}