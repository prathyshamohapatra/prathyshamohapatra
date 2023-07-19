const textarea=document.querySelector("textarea");
const button=document.querySelector("button");
const vlist=document.querySelector("select");
let synth=speechSynthesis;
let speaking=true;
function voicelist(){
    for(let voice of synth.getVoices() ){
         let selected=voice.name==="Google US English"?"selected":"";
        let opt=` <option value="${voice.name}".${selected}>${voice.name} (${voice.lang})</option>`;
        vlist.insertAdjacentHTML("beforeend",opt);
    }
}
synth.addEventListener("voiceschanged",voicelist);
function textspeech(text){
    let utter=new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices() ){
        if(voice.name===vlist.value){
            utter.voice=voice;
        }
    }
    synth.speak(utter);
}
button.addEventListener("click",e=>{
    e.preventDefault();
    if(textarea.value!==""){
        if(!synth.speaking){
        textspeech(textarea.value);
        }
        }
    });
