function ingresarNumero(numero){
	document.getElementById("input").value = document.getElementById("input").value + (numero);
}

function activarBoton(option){
	if (option == 1){
		/* Activación y desactivación de buttons */
		$(document.getElementById("triangulo")).addClass('active');
		$(document.getElementById("cuadrado")).removeClass('active');
		$(document.getElementById("circulo")).removeClass('active');

		/* Edición de textos en input principal */
		$(document.getElementById("label")).html("Ingrese Altura Triángulo");
		document.getElementById("input").placeholder = "Ingrese Altura Triángulo";
		document.getElementById("forma").value = "1";
	}
	else if (option == 2){
		/* Activación y desactivación de buttons */
		$(document.getElementById("triangulo")).removeClass('active');
		$(document.getElementById("cuadrado")).addClass('active');
		$(document.getElementById("circulo")).removeClass('active');

		/* Edición de textos en input principal */
		$(document.getElementById("label")).html("Ingrese Lado Cuadrado");
		document.getElementById("input").placeholder = "Ingrese Lado Cuadrado";
		document.getElementById("forma").value = "2";
	}
	else if (option == 3){
		/* Activación y desactivación de buttons */
		$(document.getElementById("triangulo")).removeClass('active');
		$(document.getElementById("cuadrado")).removeClass('active');
		$(document.getElementById("circulo")).addClass('active');

		/* Edición de textos en input principal */
		$(document.getElementById("label")).html("Ingrese Radio Círculo");
		document.getElementById("input").placeholder = "Ingrese Radio Círculo";
		document.getElementById("forma").value = "3";
	}
}

function ingresar(){
	event.preventDefault();
	if (document.getElementById("input").value){
		var action = 0;
		/* Triangulo */
		if (document.getElementById("forma").value == 1 && document.getElementById("hide").value == 1){
			$(document.getElementById("A")).html(document.getElementById("input").value);

			/* Limpieza de atributos en caso de segundo uso */
			$(document.getElementById("B")).html(0);
			$(document.getElementById("C")).html(0);
			document.getElementById("hide").value = 2;
			document.getElementById("input").value = "";

			$("#resultado_div").hide();
			action = 1;
		} else if (document.getElementById("forma").value == 1 && document.getElementById("hide").value == 2 && action == 0){
			$(document.getElementById("B")).html(document.getElementById("input").value);
			$(document.getElementById("C")).html(0);
			document.getElementById("hide").value = 3;
			document.getElementById("input").value = "";

			action = 1;
		} else if (document.getElementById("forma").value == 1 && document.getElementById("hide").value == 3 && action == 0){
			$(document.getElementById("C")).html(document.getElementById("input").value);
			document.getElementById("hide").value = 4;
			document.getElementById("input").value = "";

			action = 1;
		}
		/* Cuadrado */
		if (document.getElementById("forma").value == 2 && document.getElementById("hide").value == 1){
			$(document.getElementById("A")).html(document.getElementById("input").value);

			/* Limpieza de atributos en caso de segundo uso */
			$(document.getElementById("B")).html(document.getElementById("input").value);
			$(document.getElementById("C")).html(0);
			document.getElementById("hide").value = 2;
			document.getElementById("input").value = "";

			$("#resultado_div").hide();
			action = 1;
		}
		/* Circulo */
		if (document.getElementById("forma").value == 3 && document.getElementById("hide").value == 1){
			$(document.getElementById("A")).html(document.getElementById("input").value);

			/* Limpieza de atributos en caso de segundo uso */
			$(document.getElementById("B")).html(0);
			$(document.getElementById("C")).html(0);
			document.getElementById("hide").value = 2;
			document.getElementById("input").value = "";

			$("#resultado_div").hide();
			action = 1;
		}
	}
	if (document.getElementById("forma").value == 1 && document.getElementById("hide").value == 4){
		var h = (document.getElementById("A").innerHTML * document.getElementById("B").innerHTML) / document.getElementById("C").innerHTML;
		$("#resultado_div").show();
		$(document.getElementById("ResultadoArea")).html((document.getElementById("C").innerHTML * h) / 2);
		$(document.getElementById("ResultadoPerimetro")).html((document.getElementById("C").innerHTML + document.getElementById("B").innerHTML) + document.getElementById("A").innerHTML);
		document.getElementById("hide").value = 1;
	}
	if (document.getElementById("forma").value == 2 && document.getElementById("hide").value == 2){
		$("#resultado_div").show();
		$(document.getElementById("ResultadoArea")).html(document.getElementById("A").innerHTML * document.getElementById("A").innerHTML);
		$(document.getElementById("ResultadoPerimetro")).html(document.getElementById("A").innerHTML * 4);
		document.getElementById("hide").value = 1;
	}
	if (document.getElementById("forma").value == 3 && document.getElementById("hide").value == 2){
		$("#resultado_div").show();
		$(document.getElementById("ResultadoArea")).html((document.getElementById("A").innerHTML * document.getElementById("A").innerHTML) * 3.14);
		$(document.getElementById("ResultadoPerimetro")).html((document.getElementById("A").innerHTML) * 3.14 * 2);
		document.getElementById("hide").value = 1;
	}
}


function cargar(){
    $("#resultado_div").hide();
}