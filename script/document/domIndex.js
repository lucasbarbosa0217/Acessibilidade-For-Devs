index = document.getElementById("indexContent");
daltonismo = [];
geral = [];
cegueira =[];
dislexia =[];
surdez = [];
PostCategoriesService.readAll().then((data) => {
    data.forEach(element => {
        conteudo = `
        <h2 class="titleSection">${element.name}</h2>
        <ul class="listPage" id="${element.name}"><ul>
        `;

        index.innerHTML += conteudo
        console.log(conteudo)
    });
});

PostsService.readAll().then((data) => {
    data.forEach((element) => {
        console.log(element.category.name)
        if(element.category.name== "Daltonismo"){
            daltonismo.push(element)
        }else if(element.category.name== "Geral"){
            geral.push(element)
        }else if(element.category.name=="Cegueira"){
            cegueira.push(element)
        }else if(element.category.name=="Surdez"){
            surdez.push(element)
        }else{
            dislexia.push(element)
        }})

        listDaltonismo = document.getElementById("Daltonismo")
        listGeral = document.getElementById("Geral")
        listCegueira = document.getElementById("Cegueira")
        listSurdez = document.getElementById("Surdez")
        listDislexia = document.getElementById("Dislexia")

        daltonismo.forEach((element) => {
            console.log(element)
            conteudo = 
            `<li><div class="pageMini">
                    <h3>${element.title}</h3>
                       <p class="link"><a href="content.html?id=${element.id}"> Ler mais sobre...<i class="fa-solid fa-arrow-right"title="Acessar conteúdo"></i></a></p>
                </div>
            </li>
            `
            listDaltonismo.innerHTML += conteudo;
        })

        geral.forEach((element) => {
            console.log(element)
            conteudo = 
            `<li><div class="pageMini">
                    <h3>${element.title}</h3>
                       <p class="link"><a href="content.html?id=${element.id}"> Ler mais sobre...<i class="fa-solid fa-arrow-right"title="Acessar conteúdo"></i></a></p>
                </div>
            </li>
            `
            listGeral.innerHTML += conteudo;
        })

        cegueira.forEach((element) => {
            console.log(element)
            conteudo = 
            `<li><div class="pageMini">
                    <h3>${element.title}</h3>
                       <p class="link"><a href="content.html?id=${element.id}"> Ler mais sobre...<i class="fa-solid fa-arrow-right"title="Acessar conteúdo"></i></a></p>
                </div>
            </li>
            `
            listCegueira.innerHTML += conteudo;
        })

        surdez.forEach((element) => {
            console.log(element)
            conteudo = 
            `<li><div class="pageMini">
                    <h3>${element.title}</h3>
                       <p class="link"><a href="content.html?id=${element.id}"> Ler mais sobre...<i class="fa-solid fa-arrow-right"title="Acessar conteúdo"></i></a></p>
                </div>
            </li>
            `
            listSurdez.innerHTML += conteudo;
        })

        dislexia.forEach((element) => {
            console.log(element)
            conteudo = 
            `<li><div class="pageMini">
                    <h3>${element.title}</h3>
                       <p class="link"><a href="content.html?id=${element.id}"> Ler mais sobre...<i class="fa-solid fa-arrow-right"title="Acessar conteúdo"></i></a></p>
                </div>
            </li>
            `
            listDislexia.innerHTML += conteudo;
        })
    
});