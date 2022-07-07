let mega=0;
let mini=0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random()* 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-mega 3s forwards";
        }, 100);
        mega++;
    }
    else{
        setTimeout(function(){
        coin.style.animation = "spin-mini 3s forwards";
    }, 100);
    mini++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
})  

function updateStats(){
    document.querySelector("#mega-count").textContent = `Mega: ${mega}`;
    document.querySelector("#mini-count").textContent= `Mini: ${mini}`;
}
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;},3000);
}

resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    mega = 0;
    mini = 0;
    updateStats();
})