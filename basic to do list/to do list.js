var todos=["Buy New Turtle"];
var input=prompt("what would you like to do");
while(input!=="quit"){
	if (input==="list") {
		listTodos();
	}else if(input==="new"){
		addTodo();
	}else if(input==="delete"){
		deleteTodo();
	}
	input=prompt("what would you like to do?");
}
console.log("ok,you quit the app");

function listTodos(){
   console.log("***************")
   todos.forEach(function(todo,i){
   	console.log(i + ": "+ todo);
   });
   console.log("***************")
}

function addTodo(){
	var newTodo=prompt("enter new todo");
	todos.push(newTodo);
	console.log("added Todo");
}

function deleteTodo(){
	var index=prompt("enter index of todo to delete");
	todos.splice(index,1);
	console.log("deleted Todo");
}