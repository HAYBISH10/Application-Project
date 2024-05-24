const input = document.getElementById("input")
const word = document.getElementById("list")


document.getElementById("button-addon2").addEventListener("click",function(){
   if (input.value === "") {
    alert("you input is empty")

   }else{
        const list=document.createElement("li")
        list.textContent=input.value;
        list.classList.add("list-group-item","category-tag")
        word.appendChild(list)
    }
    input.value= ""
})
word.addEventListener ("click", function(e){
    e.target.remove();
})