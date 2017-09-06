function ingresarNumero(numero){
	document.getElementById("input").value = document.getElementById("input").value + (numero);
}

function activarBoton(option){
	$(document.getElementById("A")).html(0);
	$(document.getElementById("B")).html(0);
	$(document.getElementById("C")).html(0);
	$("#resultado_div").hide();
	document.getElementById("input").value = "";

	if (option == 1){
		/* Activación y desactivación de buttons */
		$(document.getElementById("triangulo")).addClass('active');
		$(document.getElementById("cuadrado")).removeClass('active');
		$(document.getElementById("circulo")).removeClass('active');

		/* Edición de textos en input principal */
		$(document.getElementById("label")).html("Ingrese Lados Triángulo");
		document.getElementById("input").placeholder = "Ingrese Lados Triángulo";
		$(document.getElementById("datoA")).html("Lado Triángulo 1");
		$(document.getElementById("datoB")).html("Lado Triángulo 2");
		$(document.getElementById("datoC")).html("Lado Triángulo 3");
		$("#datoB").show();
		$("#datoC").show();
		$("#B").show();
		$("#C").show();
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
		$(document.getElementById("datoA")).html("Lado cuadrado");
		$("#datoB").hide();
		$("#datoC").hide();
		$("#B").hide();
		$("#C").hide();
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
		$(document.getElementById("datoA")).html("Radio Círculo");
		$("#datoB").hide();
		$("#datoC").hide();
		$("#B").hide();
		$("#C").hide();
		document.getElementById("forma").value = "3";
	}
}

function ingresar(){
	event.preventDefault();
	/* Triangulo */
	if (document.getElementById("forma").value == "1"){
		if (document.getElementById("input").value){
			var action = 0;
			if (document.getElementById("hide").value == 1){
				$(document.getElementById("A")).html(document.getElementById("input").value);

				/* Limpieza de atributos en caso de segundo uso */
				$(document.getElementById("B")).html(0);
				$(document.getElementById("C")).html(0);
				document.getElementById("hide").value = 2;
				document.getElementById("input").value = "";

				$("#resultado_div").hide();
				action = 1;
			} else if (document.getElementById("hide").value == 2 && action == 0){
				$(document.getElementById("B")).html(document.getElementById("input").value);
				$(document.getElementById("C")).html(0);
				document.getElementById("hide").value = 3;
				document.getElementById("input").value = "";

				action = 1;
			} else if (document.getElementById("hide").value == 3 && action == 0){
				$(document.getElementById("C")).html(document.getElementById("input").value);
				document.getElementById("hide").value = 4;
				document.getElementById("input").value = "";

				action = 1;
			}
		}
	}

		if (document.getElementById("hide").value == 4){
			if (document.getElementById("A").value == document.getElementById("B").value && document.getElementById("B").value == document.getElementById("C").value) {
				var h = (document.getElementById("A").innerHTML ** 2) - (document.getElementById("C").innerHTML/2);
				$("#resultado_div").show();
				$(document.getElementById("ResultadoArea")).html((document.getElementById("C").innerHTML * h) / 2);
				$(document.getElementById("ResultadoPerimetro")).html(parseInt(document.getElementById("C").innerHTML) + parseInt(document.getElementById("B").innerHTML) + parseInt(document.getElementById("A").innerHTML));
				document.getElementById("hide").value = 1;
			}

			if (document.getElementById("A").value == document.getElementById("B").value) {
				$(document.getElementById("ResultadoArea")).html((document.getElementById("A").innerHTML * document.getElementById("B").innerHTML) / 2);
				$(document.getElementById("ResultadoPerimetro")).html(parseInt(document.getElementById("C").innerHTML) + parseInt(document.getElementById("B").innerHTML) + parseInt(document.getElementById("A").innerHTML));
				document.getElementById("hide").value = 1;	
			}

			if (document.getElementById("A").value == document.getElementById("C").value) {
				$(document.getElementById("ResultadoArea")).html((document.getElementById("A").innerHTML * document.getElementById("C").innerHTML) / 2);
				$(document.getElementById("ResultadoPerimetro")).html(parseInt(document.getElementById("C").innerHTML) + parseInt(document.getElementById("B").innerHTML) + parseInt(document.getElementById("A").innerHTML));
				document.getElementById("hide").value = 1;	
			}

			if (document.getElementById("B").value == document.getElementById("C").value) {
				$(document.getElementById("ResultadoArea")).html((document.getElementById("B").innerHTML * document.getElementById("C").innerHTML) / 2);
				$(document.getElementById("ResultadoPerimetro")).html(parseInt(document.getElementById("C").innerHTML) + parseInt(document.getElementById("B").innerHTML) + parseInt(document.getElementById("A").innerHTML));
				document.getElementById("hide").value = 1;	
			}
		}
		



		/* Cuadrado */
	if (document.getElementById("forma").value == "2"){
		if (document.getElementById("input").value){
			$(document.getElementById("A")).html(document.getElementById("input").value);

			$("#resultado_div").show();
			$(document.getElementById("ResultadoArea")).html(document.getElementById("A").innerHTML ** 2);
			$(document.getElementById("ResultadoPerimetro")).html(document.getElementById("A").innerHTML * 4);
			document.getElementById("hide").value = 1;
		}
	}

	/* Circulo */
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