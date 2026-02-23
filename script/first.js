// counter update

window.onload = function() {
    document.getElementById("all-button-hero").style.backgroundColor = "black";
    document.getElementById("all-button-hero").style.color = "white";
};

const firstAllButton = document.getElementById("all-button-hero");
const firstInterviewButton = document.getElementById("interview-button-hero");
const firstRejectButton = document.getElementById("rejected-button-hero");

function resetStyle(){
    const buttons = [ firstAllButton, firstInterviewButton, firstRejectButton];
    buttons.forEach(function(sobBtn){
        if(sobBtn){
            sobBtn.style.backgroundColor = "";
            sobBtn.style.color = "";
        }
    })
}

firstAllButton.addEventListener("click", function(){
    resetStyle();
    this.style.backgroundColor = "black";
    this.style.color = "white";
});
firstInterviewButton.addEventListener("click", function(){
    resetStyle();
    this.style.backgroundColor = "black";
    this.style.color = "white";
});
firstRejectButton.addEventListener("click", function(){
    resetStyle();
    this.style.backgroundColor = "black";
    this.style.color = "white";
});


// document.getElementById("all-button-hero").addEventListener("click", function(){
//     this.style.backgroundColor = "black";
//     this.style.color = "white";
// })

function updateCounter(){

    let allCards = document.querySelectorAll(".card");
    
    let interviewCards = document.querySelectorAll('.card[data-status="interview"]');
    let rejectedCards = document.querySelectorAll('.card[data-status="rejected"]'); 

    document.getElementById("totalCount").innerText = allCards.length;
    document.getElementById("interviewCount").innerText =interviewCards.length;
    document.getElementById("rejectCount").innerText= rejectedCards.length;
}
updateCounter();

// interview button

//  



let interviewBtns = document.querySelectorAll(".interview");

interviewBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        let card = btn.closest(".card")
        card.dataset.status = "interview";
        card.querySelector(".notApplied").innerText = "Interviewing";
        updateCounter();
    })
})


// rejected button

let rejectedBtns = document.querySelectorAll(".rejected");

rejectedBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        let card = btn.closest(".card");
        card.dataset.status = "rejected"
        card.querySelector(".notApplied").innerText = "Rejected";
        updateCounter();
    })
})


// delete button 


let deleteBtns = document.querySelectorAll(".delete");

deleteBtns.forEach(function(btn){

    btn.addEventListener("click", function(){
        let card =btn.closest(".card");
        card.remove();
        updateCounter();
    })
})


// filter buttons 

let filterBtns = document.querySelectorAll("[data-filter]");
 
filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        let filterValue = btn.dataset.filter ;
        let card = document.querySelectorAll(".card")
        card.forEach(function(card){
            if(filterValue === "all"){
                card.style.display = "block";
            }else{
                if(card.dataset.status === filterValue){
                    card.style.display = "block";

                }
                else{
                    card.style.display = "none";
                }
            }
        })
    })
})