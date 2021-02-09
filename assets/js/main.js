const mnleft = document.querySelector("#menu-left");
const mnright = document.querySelector("#menu-right");
const hdbar = document.querySelector(".menubar .header-bar")

mnright.addEventListener("click",()=>{
    hdbar.classList.toggle("active");
})