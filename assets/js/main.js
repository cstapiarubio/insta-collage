function validación(valor){
	var valor = document.getElementsByClassName("form-control").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
		alert ("Debe rellenar el recuadro");
	}
}
validación();