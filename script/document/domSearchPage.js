
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
filter = urlParams.get("filter")

searchList = document.getElementById("searchList");
if(filter != '' && filter != null){
SearchService.search(filter).then((data) => {
    if(data.length>0){

    searchList.innerHTML=""
    data.forEach((element) => {
        console.log(element)
        conteudo = 
        `<li><div class="pageMini">
                <h3>${element.title}</h3>
                   <p class="link"><a href="content.html?id=${element.id}"> Ler mais sobre...<i class="fa-solid fa-arrow-right"title="Acessar conteúdo"></i></a></p>
            </div>
        </li>
        `
       searchList.innerHTML += conteudo;
    })
    }
})}