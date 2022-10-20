 container = document.getElementById("main");
 console.log(container)
    id = 1;
      id = document.URL.split("=")
      console.log(id)
      if(id.length > 1){
      id = parseInt(id[1]);
      console.log(id)
      fetch(`content.json`)
  
      .then((data) => data.json())
      .then((data)=>{
                container.innerHTML = data.find(x => x.id === id).content.replaceAll("$", `"`)
      }).catch((error) => {container.innerHTML = `<h1>Erro 404</h1> <p>${error}<p>`})
    
    }
    



    