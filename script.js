const button = document.querySelector(".btn");
const selectedRating = document.querySelectorAll(".number");
const addRating = document.querySelector(".add-rating");
const topContainer =document.querySelector(".top_container"); 
const bottomContainer =document.querySelector(".bottom_container"); 

let ratingAnswer = 4;

selectedRating.forEach(rating=>{
    rating.addEventListener("click",function(event){
        selectedRating.forEach(rating=>{
            rating.classList.remove ('grey');
            rating.classList.remove ('white');


        });
        if(event.target.classList.contains("grey")){
            event.target.classList.remove("grey");
            event.target.classList.remove("white");

        }
        else{
            event.target.classList.add("grey");
            event.target.classList.add("white");
            
        }
        ratingAnswer = event.target.textContent;
    })
})


button.addEventListener("click",function(){
    topContainer.style.display="none";
    bottomContainer.style.display="block";
    document.querySelector("span").innerText=ratingAnswer;
})