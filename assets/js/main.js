
/*función vaidación de campos*/
function validacion(){

	var nombre = document.getElementById("usr").value;
	if ( nombre=== "" || nombre=== null || nombre.length === 0){
		return false;
	}
	
	var contrasenia= document.getElementById("pwd").value;
	if ( contrasenia === "" || contrasenia=== null || contrasenia.length === 0){
		return false;
	}

	else if(contrasenia.length<6 || contrasenia === "123456"){
		alert("Ingrese una contraseña válida");
		return false;
	}
}
validacion();

/*función drag and drop collage*/

function drag(ev){
	console.log(ev.target.id);
	ev.dataTransfer.setData("text", ev.target.id);
}
drag();

function permitirDrop(ev){
	ev.preventDefault();
}
permitirDrop();

function drop(ev){
	ev.preventDefault();
	var id_foto=ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(id_foto));
}
drop();


