let btn_menuToggle = document.getElementById("menu_toggle");
let btn_menuUser = document.getElementById("menuUser");
let btn_cardFlip = document.querySelectorAll(".cardSettings");
let btn_cardReturn = document.querySelectorAll(".back button");
let leftMenu = document.getElementById("leftMenu");

btn_menuToggle.addEventListener('click', (e) => {
    btn_menuToggle.classList.toggle("clicked");
    leftMenu.classList.toggle("expanded");
});

btn_menuUser.addEventListener('click', (e) => {
    btn_menuUser.classList.toggle("clicked");
    document.body.classList.toggle("expandUserTools")

})

btn_cardFlip.forEach((el)=>{
    el.addEventListener('click', (e) => {
        e.target.closest("article").classList.toggle("flipped");
    })
})

btn_cardReturn.forEach((el) => {
    el.addEventListener("click", (e) =>{
        e.target.closest("article").classList.toggle("flipped");
    });
})

