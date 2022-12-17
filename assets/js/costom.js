let type = document.querySelector(".type")
let typetext = type.innerHTML
let typeNumber = 0;
    type.innerHTML = ""

function typejs(){
    if(typeNumber < typetext.length){
        type.innerHTML += typetext.charAt(typeNumber)
        typeNumber++
        textArr = type.innerHTML.split("")
    }else{
        textArr.pop()
        type.innerHTML = textArr.join("")
        if(textArr == 0){
            typeNumber = 0
        }

    }
}

setInterval(() => {
    typejs()
}, 200);

