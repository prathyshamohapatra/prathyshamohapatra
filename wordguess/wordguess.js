const input=document.querySelector(".input"),
reset=document.querySelector(".reset"),
hint=document.querySelector(".hint span"),
guessleft=document.querySelector(".guessleft span"),
wrongletter=document.querySelector(".wrongletters span")
typeinput=document.querySelector(".typeinput");
let word;
let wrong=[];
let right=[];
let maxguess;
function randomword(){
    const ranwor=wordlist[Math.floor(Math.random()*wordlist.length)];
     word=ranwor.word;
     maxguess=10; wrong=[]; right=[];
    console.log(ranwor);

    hint.innerHTML=ranwor.hint;
    guessleft.innerText=maxguess;
    wrongletter.innertext=wrong;
    let html="";
    for(let p=0;p<word.length;p++){
        html+='<input  type="text"  disabled>';
    }
    input.innerHTML=html;
    
}
randomword();
function ingame(e){
    let key=e.target.value;
    if(key.match(/^[A-Za-z]+$/)&&!wrong.includes(`${key}`)&&!right.includes(key)){
        console.log(key);
        if(word.includes(key)){
            console.log("letter found");
            for(let q=0;q<word.length;q++){
                if(word[q]===key){
                    right.push(key);
                    input.querySelectorAll("input")[q].value=key;
                }
            }
        }else{
            maxguess--;
            wrong.push(`${key}`);
        }
    }
    guessleft.innerText=maxguess;
    wrongletter.innerHTML=wrong;
    typeinput.value="";
    setTimeout(() => {
        if(right.length === word.length) {
            alert(`Congrats! You found the word ${word.toUpperCase()}`);
            return randomword();
        } else if(maxguess < 1) {
            alert("Game over! You don't have remaining guesses");
            for(let i = 0; i < word.length; i++) {
                input.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}
    
    
reset.addEventListener("click",randomword);
typeinput.addEventListener("input",ingame);
input.addEventListener("click", () => typeinput.focus());
document.addEventListener("keydown",()=>typeinput.focus());
