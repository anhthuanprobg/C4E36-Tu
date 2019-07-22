let opClour = document.getElementById('option-colour')
let del = document.getElementById('Delbtn')
del.addEventListener("click",()=>{
    for (let i = 0; i <= opClour.options.length; i++) {
        if(opClour.options[i].selected){
        opClour.remove(i)}}
})