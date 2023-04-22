//whenever someone clicks on taskbar we want our startmenu to come out

let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];
// why we have written [0] -->
// because .getElementsByClassName  returns  the whole html collection and we just want its first element.

taskbar.addEventListener("click" , ()=>{
    if(startmenu.style.bottom =="50px"){
        startmenu.style.bottom ="-655px";
    }
    else{
        startmenu.style.bottom ="50px";
    }
})