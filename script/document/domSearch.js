formSearch = document.getElementById("searchForm");
conteudoSearch = document.getElementById("search");

formSearch.addEventListener("submit", () =>{
    event.preventDefault();
    window.location.href="search.html?filter="+conteudoSearch.value;
})