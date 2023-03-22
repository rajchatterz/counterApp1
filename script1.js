const incre = document.getElementById("increment")
const decre = document.getElementById("decrement")
const disp = document.getElementById("display")
const reset = document.getElementById("reset")

incre.addEventListener("click",()=>{
    const val1 = Number(display.innerText);
    if(val1>=10){
        
        alert("10+values are not aloowed")
    }
    else{
        display.innerText=val1+1
    }
})
decre.addEventListener("click",()=>{
    const val2 = Number(display.innerText);
    if(val2>0){
        display.innerText=val2-1;
    }
    else{
        alert("You have reach the limit")
    }
})
reset.addEventListener("click",()=>{
    display.innerText=0
})