const starContainer = document.querySelector("#star_container");
const countElement = document.querySelector("#count");
const starList = document.querySelectorAll(".star");
let lastIndx = 0;

function fillAndRemoveColor(indx){
//remove color
    for(let i = 0; i < starList.length; i++){
        starList[i].classList.remove("star-color")
    }
//fill color
    for(let i = 0; i < indx; i++){
        starList[i].classList.add("star-color")
    }
}
starContainer.addEventListener("click", function (e) {
    //update the star count text
    //update star colour
    if(e.target == starContainer){
        return;
    }
    const stars = e.target.dataset.idx;
    lastIndx = stars;
    fillAndRemoveColor(stars);
    countElement.textContent = stars;
    
})
starContainer.addEventListener("mouseover", function(e){
    //update the star count
    const stars = e.target.dataset.idx;
    fillAndRemoveColor(stars)
})
    
starContainer.addEventListener("mouseleave", function(){
    //update the starcount to last clicked index
    fillAndRemoveColor(lastIndx)
})
