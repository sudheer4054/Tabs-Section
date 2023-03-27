const tabs = document.querySelector(".tabs");
const btn=document.querySelectorAll(".button");
const article=document.querySelectorAll(".content")
tabs.addEventListener("click",function(event){
const id=event.target.dataset.id
if(id){
    btn.forEach(function(btn){
       btn.classList.remove("live")
    });
    event.target.classList.add("live");
    article.forEach(function(article){
        article.classList.remove("live")
    })
    const element=document.getElementById(id);
    element.classList.add("live")
}
})