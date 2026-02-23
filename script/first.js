// counter update

window.onload = function() {
    document.getElementById("all-button-hero").style.backgroundColor = "black";
    document.getElementById("all-button-hero").style.color = "white";
};

let firstAllButton = document.getElementById("all-button-hero");
let firstInterviewButton = document.getElementById("interview-button-hero");
let firstRejectButton = document.getElementById("rejected-button-hero");

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




function updateCounter(){

    let allCards = document.querySelectorAll('.card[data-status="not"]');
    
    let interviewCards = document.querySelectorAll('.card[data-status="interview"]');
    let rejectedCards = document.querySelectorAll('.card[data-status="rejected"]'); 



    // document.getElementById("totalCount").innerText = allCards.length;
    const elements = document.getElementsByClassName("totalCount");

    for (let el of elements) {
       el.innerText = allCards.length;
    }
    document.getElementById("interviewCount").innerText =interviewCards.length;
    document.getElementById("rejectCount").innerText= rejectedCards.length;



    const totalExistingCards = document.querySelectorAll(".card").length;
    const noJobSection = document.getElementById("no-job-available");
    if (allCards.length === 0) {
        noJobSection.style.display = "block";
    } else {
        noJobSection.style.display = "none";
    }

}

updateCounter();

// interview button


let interviewBtns = document.querySelectorAll(".interview");
console.log(interviewBtns.length);

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
const jobDisplay = document.getElementById("job-count-display");
 
filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        let filterValue = btn.dataset.filter ;
        let card = document.querySelectorAll(".card")
        let visibleCardCount = 0 ;

        card.forEach(function(card){
            if(filterValue === "all"){
                
                if(card.dataset.status === "not"){
                    card.style.display = "block";
                    visibleCardCount++;
                } else {
                    card.style.display = "none";
                }
                
            }else{
                if(card.dataset.status === filterValue){
                    card.style.display = "block";
                    visibleCardCount++;
                }
                else{
                    card.style.display = "none";
                }
            }
        });

        const noJobSection = document.getElementById("no-job-available");
        if(visibleCardCount === 0){
            noJobSection.style.display = "block";
        }else {
            noJobSection.style.display = "none";
        }
    })
})

