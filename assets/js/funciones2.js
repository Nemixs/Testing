function ingresarNumero(numero){
	document.getElementById("input").value = document.getElementById("input").value + (numero);
}

function activarBoton(option){
	$(document.getElementById("A")).html(0);
	$(document.getElementById("B")).html(0);
	$("#resultado_div").hide();
	if (option == 1){
		/* Activación y desactivación de buttons */
		$(document.getElementById("triangulo")).addClass('active');
		$(document.getElementById("cuadrado")).removeClass('active');
		$(document.getElementById("circulo")).removeClass('active');

		/* Edición de textos en input principal */
		$(document.getElementById("label")).html("Ingrese Altura Triángulo");
		document.getElementById("input").placeholder = "Ingrese Altura Triángulo";
		$(document.getElementById("datoA")).html("Lado Triángulo");
		$("#datoB").show();
		$("#B").show();
		document.getElementById("forma").value = "1";
	}
	else if (option == 2){
		/* Activación y desactivación de buttons */
		$(document.getElementById("triangulo")).removeClass('active');
		$(document.getElementById("cuadrado")).addClass('active');
		$(document.getElementById("circulo")).removeClass('active');

		/*Edición de textos en input */
		$(document.getElementById("label")).html("Ingrese Lado cuadrado");
		document.getElementById("input").placeholder = "Ingrese Lado cuadrado";
		$(document.getElementById("datoA")).html("Lado cuadrado");
		$("#datoB").hide();
		$("#B").hide();
		document.getElementById("forma").value = "2";
	}
	else if (option == 3){
		/* Activación y desactivación de buttons */
		$(document.getElementById("triangulo")).removeClass('active');
		$(document.getElementById("cuadrado")).removeClass('active');
		$(document.getElementById("circulo")).addClass('active');
		$(document.getElementById("label")).html("Ingrese Radio del circulo");
		document.getElementById("input").placeholder = "Ingrese Radio de circulo";
		$(document.getElementById("datoA")).html("Radio Círculo");
		$("#datoB").hide();
		$("#B").hide();
		document.getElementById("forma").value = "3";
	}
}

function ingresar(){
	event.preventDefault();
	if (document.getElementById("forma").value == "1"){
		if (document.getElementById("input").value){
			var action = 0;
			if (document.getElementById("hide").value == 1){
				$(document.getElementById("A")).html(document.getElementById("input").value);

				/* Limpieza de atributos en caso de segundo uso */
				$(document.getElementById("B")).html(0);
				document.getElementById("hide").value = 2;
				document.getElementById("input").value = "";

				$("#resultado_div").hide();
				action = 1;
			} else if (document.getElementById("hide").value == 2 && action == 0){
				$(document.getElementById("B")).html(document.getElementById("input").value);
				document.getElementById("hide").value = 3;
				document.getElementById("input").value = "";

				action = 1;
			}
		}


		if (document.getElementById("hide").value == 3){
			$("#resultado_div").show();
			$(document.getElementById("ResultadoArea")).html((document.getElementById("A").innerHTML * document.getElementById("B").innerHTML) / 2);
			$(document.getElementById("ResultadoPerimetro")).html("Falta Sacar Perímetro");
			document.getElementById("hide").value = 1;
		}
	}

	//Calcular formulas cuadrado
	if (document.getElementById("forma").value == "2"){
		if (document.getElementById("input").value){
			$(document.getElementById("A")).html(document.getElementById("input").value);

			$("#resultado_div").show();
			$(document.getElementById("ResultadoArea")).html(document.getElementById("A").innerHTML ** 2);
			$(document.getElementById("ResultadoPerimetro")).html(document.getElementById("A").innerHTML * 4);
			document.getElementById("hide").value = 1;
		}
	}

	//Calcular formulas circulo
	if (document.getElementById("forma").value == "3"){
		var pi = 3.14;
		if (document.getElementById("input").value){
			$(document.getElementById("A")).html(document.getElementById("input").value);

			$("#resultado_div").show();
			$(document.getElementById("ResultadoArea")).html(pi * (document.getElementById("A").innerHTML ** 2));
			$(document.getElementById("ResultadoPerimetro")).html(2 * pi * document.getElementById("A").innerHTML);
			document.getElementById("hide").value = 1;
		}
	}



}

function cargar(){
    $("#resultado_div").hide();
}