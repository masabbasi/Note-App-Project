const $ = document;
const myVar = {
    input: $.querySelector("input"),
    plus: $.querySelector(".fa-square-plus"),
    eraser: $.querySelector(".fa-eraser"),
    colorItem: $.querySelectorAll(".color-mode-item"),
    noteItem: $.querySelector(".note-item"),
    myNote: $.querySelector(".mynote"),
    noteText: $.querySelector("span")
}

function addNote () {
    let createDiv =$.createElement("div");
    createDiv.classList.add('note-item')
    createDiv.style.backgroundColor=myVar.input.style.backgroundColor;
    let createSpan =$.createElement("span");
    let noteTexy=$.createTextNode(myVar.input.value);
    createSpan.appendChild(noteTexy);
    createDiv.appendChild(createSpan);
    myVar.myNote.appendChild(createDiv);
    createDiv.addEventListener('click',removeNote)
    myVar.input.value=""
    myVar.input.style.backgroundColor='';
}

function removeNote(event) {
    event.target.parentElement.remove()
    // let itemDelete = event.target.parentElement;
    // myVar.myNote.removeChild(itemDelete);
}

//////////////////Set Color - First Method
// myVar.colorItem.forEach(function(){
//     for (let i=0;i<myVar.colorItem.length;i++)
//     {
//         myVar.colorItem[i].addEventListener('click',function(){
//         myVar.input.style.backgroundColor=myVar.colorItem[i].style.backgroundColor;
//         })
//     }
// })
//////////////////

//////////////////Set Color - Second Method
myVar.colorItem.forEach(function(item){
    item.addEventListener('click',function(){
        myVar.input.style.backgroundColor=item.style.backgroundColor;
        })
    }
)

myVar.input.addEventListener('keypress',function(event){
    if (event.key==='Enter' && myVar.input.value && myVar.input.value!=" " ) {
        addNote()
    }
})

myVar.eraser.addEventListener('click',function(){
    myVar.input.value="";
    myVar.input.style.backgroundColor='';
})

myVar.plus.addEventListener('click',function(){
    if (myVar.input.value && myVar.input.value!=" " ) {
        addNote()
    }
})