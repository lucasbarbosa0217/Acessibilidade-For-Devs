 container = document.getElementById("main");
 console.log(container)
    id = 1;
      id = document.URL.split("=")
      id = parseInt(id[1]);
      console.log(id)
      fetch(`content.json`)
      .then((data) => data.json())
      .then((data)=>{
           
                container.innerHTML = data.find(x => x.id === id).content.replaceAll("$", `"`)
    
      })



    