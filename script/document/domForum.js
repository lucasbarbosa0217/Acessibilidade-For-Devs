listpost = document.getElementById("listpost");
listuser = document.getElementById("listpost");


ForumPostsService.readAll()
.then((data) => configuraTela(data))
.catch((error) => {
   console.log(error);
  //  window.location.href = "./index.html"
} )

//ForumPostsService.readMe()
//.then((data) => { if(isLogged){console.log(data)}else{window.location.href = "./login.html"}})
//.catch((error) => window.location.href = "./login.html")

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
            <p class="infoforum">Pergunta feita por <b id="forumusername">${element.author.name}</b>, <b id="forumdate">${element.createdAt}</b></p>

        </div>
    </div>
    </a>
        `
        listpost.innerHTML += post
       
    });
}

function configuraTelaUser(data){

    data.forEach(element => {
        userpost = 
        `
        <a href="forumpost.html?id=${element.id}>"><div class="userpostcard"><h3>${element.title}</h3><i class="fa-solid fa-arrow-right"></i></div></a>
        `
        listuser+= userpost
    });
}

