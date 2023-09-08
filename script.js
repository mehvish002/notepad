const inputText = document.getElementById('note-text');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const output = document.getElementById('output');


// let child,delBtn,h2,p;
function add(){
    if((inputText.value == "") | (inputText.value == " ")){
        alert('Please type something.')
    }
    else{
        let item=document.createElement("div");
        item.innerHTML=inputText.value;
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        span.classList.add="span";
        span.setAttribute('id','spanhai');
        item.appendChild(span);
        output.appendChild(item);
        console.log("successfully saved");
        inputText.value="";
    }
    savingItem();
}
function savingItem(){
    localStorage.setItem("data",output.innerHTML);
}
function showingItem(){
    output.innerHTML=localStorage.getItem("data");
}
output.addEventListener('click',function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savingItem();
    }
})
function clearAll(){
   
        localStorage.clear();
        location.reload();
    
}
showingItem();
