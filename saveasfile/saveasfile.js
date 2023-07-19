const txtarea=document.querySelector("textarea"),
filenameip=document.querySelector(".filename input"),
selmenu=document.querySelector(".saveas select"),
savebtn=document.querySelector(".savebtn");
selmenu.addEventListener("change",()=>{
    let selopt=selmenu.options[selmenu.selectedIndex].text;
    savebtn.innerHTML=` Save as ${selopt.split(" ")[0]} File`;

})
savebtn.addEventListener("click",()=>{
    const blob=new Blob([txtarea.value],{type:selmenu.value});
    const fileurl=URL.createObjectURL(blob);
    console.log(fileurl);
    const link=document.createElement("a");
    link.download=filenameip.value;
    link.href=fileurl;
    link.click();
})