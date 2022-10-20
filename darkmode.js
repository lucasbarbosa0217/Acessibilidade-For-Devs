container = document.getElementById("main");
toggle = document.getElementById("darktoggle");
menutoggle = document.getElementById("menutoggle")
menu = document.getElementById("menu")
nav = document.getElementsByClassName("nav")

toggle.addEventListener('input', function(){
    if (toggle.checked)
    {
        container.style.backgroundColor = "#101010";
        container.style.color="white";
    }
    else{
        container.style.backgroundColor = "#FFFFFF";
        container.style.color="black";
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