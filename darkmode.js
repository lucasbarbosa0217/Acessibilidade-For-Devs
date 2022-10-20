container = document.getElementsByClassName("container");
toggle = document.getElementById("darktoggle");
menutoggle = document.getElementById("menutoggle")
menu = document.getElementById("menu")
nav = document.getElementsByClassName("nav")

toggle.addEventListener('input', function(){
    if (toggle.checked)
    {
        for(i = 0; container.length; i++){
            container[i].style.backgroundColor = "#101010";
            container[i].style.color="white";
        }
       
    }
    else{

        for(i = 0; container.length; i++){
        container[i].style.backgroundColor = "#FFFFFF";
        container[i].style.color="black";}

    }
})


menutoggle.addEventListener('input', function(){
    if (menutoggle.checked)
    {
        menu.style.display = "inherit"
        nav[0].style.display = "inherit"
    }
    else{
        menu.style.display= "none"
        nav[0].style.display = "inherit"
    }
})