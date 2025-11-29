let code = document.querySelector(".code>div");
function resetCode(){
    for(let i=0;i<4;){
        let num = Math.floor(Math.random()*(122-48+1)+48);
        if(num>=48&&num<=57||num>=65&&num<=90||num>=97&&num<=122){
            code.innerHTML += `${String.fromCharCode(num)}`;
            i++;
        }
    }
}
code.addEventListener("click",()=>{
    code.innerHTML = "";
    resetCode();
})
resetCode();