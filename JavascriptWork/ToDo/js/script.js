var button =document.getElementById("button");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");


function inputLength(){
    return input.value.length>0;
}
 function createListElement(){
    var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delButton);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.classList.add("delClass");
	delButton.innerHTML='Delete';

 }

 function addListAfterClick(){
    if(inputLength()){
        createListElement();  
    }
 }

 function addListAfterKeyPress(event){
    if(inputLength() && event.keyCode===13 ){
        createListElement();
     }

 }

 function doneTask(task){
    if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}
function deleteListElement(element){
    if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}

}

 function handleUlClick(element){
     doneTask(element);
     deleteListElement(element);

 }

button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeyPress)
ul.addEventListener("click", handleUlClick)
