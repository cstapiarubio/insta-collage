
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

	