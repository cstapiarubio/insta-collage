function validacion(){

	function nombre(){ 
		var nombre = document.getElementById("usr").value;
		if ( nombre=== "" || nombre=== null || nombre.length === 0){
	return false;
		}
	}
	nombre();

	function password(){
		var contrasenia= document.getElementById("pwd").value;
		if ( contrasenia === "" || contrasenia=== null || contrasenia.length === 0){
	return false;
	}

	else if(contrasenia.length<6 || contrasenia === "123456"){
	alert("Ingrese una contraseña válida");
	return false;
	}
}
	password();

}
validacion();

	/*var contrasenia=document.getElementById("pwd").value;
		if (!(/^(?=.*\d).{6,}$/).test(contrasenia)|| contrasenia==="123456"|| contrasenia==="password") {
			var crearSpan= document.createElement("span");
			var mensaje= document.createTextNode("Contraseña inválida, ingrese nuevamente");
			var fatherClass=document.getElementsByClassName("form-group")[1];
			crearSpan.appendChild(mensaje);
			fatherClass.appendChild(crearSpan);
		}
	}
	password();
	
}
validación();


/*function password(){
		var valor = document.getElementsByClassName("form-control").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
		alert
	}
	}
(!(/^[A-Z][a-z]{3,19}$/).test(nombre)){
			var crearSpan= document.createElement("span");
			var mensaje= document.createTextNode("Nombre inválido, ingrese nuevamente");
			var fatherClass=document.getElementsByClassName("form-group")[0];
			crearSpan.appendChild(mensaje);
			fatherClass.appendChild(crearSpan);
		}
	*/