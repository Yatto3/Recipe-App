"use strict";

const mainContainerHeaderElem = document.querySelector("[data-header]");
const feedBackBlocks = document.querySelector("[data-feedBack]");
const howToContainerElem = document.querySelector("[data-howTo]");
const dinnersMenuElem = document.querySelectorAll("[data-meal]");


mainContainerHeaderElem.addEventListener("mouseover" , (e) => {
    
    if ( e.target.tagName === "P" ){
        let parent = e.target.parentNode;
        let ul = parent.querySelector(".wrapper");

        parent.addEventListener("click", (e) => {
            
           if ( e.target.innerHTML === "How to Add a Recipe"){
            window.open("./addRecipe.html");
           }
           
        })

        ul.style.display = "flex";

        parent.addEventListener("mouseleave", (e) => {
            ul.style.display = "none";
       })
        ul.addEventListener("mouseleave", (e) => {
            ul.style.display = "none";
       })
    }
    if (e.target.tagName === "DIV" && e.target.getAttribute("class") == "login"){
        e.target.addEventListener("click", (e) => {
            window.open("./loginForm.html");
        })
    } else return;
});



howToContainerElem.addEventListener("click", (e) => {
    if ( e.target.tagName === "IMG" && e.target.alt === "git"){
        window.open("https://github.com/Yatto3");
    }
})

feedBackBlocks.addEventListener("click", (e) => {
    if ( e.target.tagName === "IMG"){

        let container = e.target.parentNode.parentNode ;
        let div = document.createElement("div");
        let p = document.createElement("p");

        div.setAttribute("class", "feedBack");
        p.innerHTML = " Thanks for your feedback!";

        container.style.display = 'none';
        div.append(p);
        
        setTimeout(() => {
            howToContainerElem.querySelector("#article").append(div);
            
        },500)

       setTimeout(()=> {
        howToContainerElem.querySelector(".feedBack").addEventListener("click" ,(e) => {
            if ( e.target.tagName === "P"){
                howToContainerElem.querySelector(".feedBack").style.display = "none";
            }
        })
       },500)
    }
})