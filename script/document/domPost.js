form = document.getElementById("postforum");
titulo = document.getElementById("titulo");
content = document.getElementById("conteudo");


form.addEventListener("submit", () => {
    event.preventDefault();

    if(isLogged){
        ForumPostsService.create(titulo.value, conteudo.value)
        .then((data) => {
            window.alert("Post feito!");
            window.location.href=`./forumpost.html?id=${data.forumPost.id}`
        })
        .catch((error) => {
            window.alert("Erro")
        })
    }else{
        window.alert("a");
        window.location.href= "./login.html"}

})


