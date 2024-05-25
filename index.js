const input = document.getElementById("input")
const word = document.getElementById("list")


document.getElementById("button-addon2").addEventListener("click",function(){
   if (input.value === "") {
    alert("your input is empty")

   }else{
        const list=document.createElement("li")
        list.textContent=input.value;
        list.classList.add("list-group-item","category-tag")
        word.appendChild(list)
    }
    input.value= ""
})
word.addEventListener ("click", function(e){
    // e.target.remove();
    e.target.style.textDecoration="line-through"
    save()
})

document.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        if(input.value===""){
            alert("i know you press me but nothing you input")
        }else{
        const list=document.createElement("li")
        list.textContent=input.value;
        list.classList.add("list-group-item","category-tag")
        word.appendChild(list)
       
    }
    input.value= ""
    save()
}
 })

 function save(){
    localStorage.setItem("data", word.innerHTML)
 }

 function read(){
    word.innerHTML=localStorage.getItem("data")
 }
 read()