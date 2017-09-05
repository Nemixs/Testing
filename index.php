<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Calculadora - Testing</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <script src="assets/js/funciones.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  </head>
  <body>
  <body onload="cargar()"> <!-- onload="cargar()" -->
    <div class="text-center"> <!-- <div align="center"> -->
      <h1>Calculadora de Área y Perímetro </h1>
      <br>
          </div>

    <br>

    <div class="text-center">
      <div class="row">
        <input type="hidden" id="forma" value="1">
        <div class="col-md-2 col-md-offset-1">
          <button type="button" class="btn btn-success btn-lg btn-block active" id="triangulo" onclick="activarBoton(1)">Triángulo</button>
        </div>
        <div class="col-md-2 col-md-offset-2">
          <button type="button" class="btn btn-primary btn-lg btn-block" id="cuadrado" onclick="activarBoton(2)">Cuadrado</button>
        </div>
        <div class="col-md-2 col-md-offset-2">
          <button type="button" class="btn btn-danger btn-lg btn-block" id="circulo" onclick="activarBoton(3)">Círculo</button>
        </div>
      </div>
      <br><br>
       

      <form>
        <div class="col-md-12">
          <div class="input-group col-md-6 col-md-offset-3">
            <span class="input-group-addon" id="label">Ingrese Altura Triángulo</span>
            <input type="text" class="form-control input-lg" id="input" placeholder="Ingrese Altura Triángulo">
          </div>
    <!--  <div class="input-group col-md-6">
            <button class="btn btn-default btn-lg">Ingresar</button>
          </div> -->
        </div>
        
        <br><br><br><br>
        <!--
        <div class="row">
          <div class="col-md-12">
            <button class="btn btn-default btn-lg" onclick="ingresarNumero(7)">7</button>
            <button class="btn btn-default btn-lg" onclick="ingresarNumero(8)">8</button>
            <button class="btn btn-default btn-lg" onclick="ingresarNumero(9)">9</button>
          </div>
          <div class="col-md-12">
            <button class="btn btn-default btn-lg" onclick="ingresarNumero(4)">4</button>
            <button class="btn btn-default btn-lg" onclick="ingresarNumero(5)">5</button>
            <button class="btn btn-default btn-lg" onclick="ingresarNumero(6)">6</button>
          </div>
          <div class="col-md-12">
            <button class="btn btn-default btn-lg" onclick="ingresarNumero(1)">1</button>
            <button class="btn btn-default btn-lg" onclick="ingresarNumero(2)">2</button>
            <button class="btn btn-default btn-lg" onclick="ingresarNumero(3)">3</button>
          </div>
          <div class="col-md-12">
              <button class="btn btn-default btn-lg" onclick="ingresarNumero(0)">0</button>
          </div>
        </div>
        -->

        <div class="row">
          <div class="col-md-12">
            <div class="col-md-2 col-md-offset-4">
              <h3 id = "datoA">Lado Triángulo 1</h3>
            </div>
            <div>
              <h3 class="col-md-2" id="A">0</h3>
            </div>
            <div class="col-md-2 col-md-offset-4">
              <h3 id = "datoB">Lado Triángulo 2</h3>
            </div>
            <div>
              <h3 class="col-md-2" id="B">0</h3>
            </div>
            <div class="col-md-2 col-md-offset-4">
              <h3 id = "datoC">Lado Triángulo 3</h3>
            </div>
            <div>
              <h3 class="col-md-2" id="C">0</h3>
            </div>
            <div id="resultado_div">
              <div class="col-md-2 col-md-offset-4">
                <h3 class="col-md-2">Área:</h3> <!-- type="hidden" -->
              </div>
              <div>
                <h3 class="col-md-2" id="ResultadoArea">0</h3>
              </div>
              <div class="col-md-2 col-md-offset-4">
                <h3 class="col-md-2">Perímetro:</h3> <!-- type="hidden" -->
              </div>
              <div>
                <h3 class="col-md-2" id="ResultadoPerimetro">0</h3>
              </div>
            </div>
          </div>
        </div>
        
        <br><br>
        
        <div class="input-group col-md-6 col-md-offset-3">
          <input type="hidden" id="hide" value="1">
          <button class="btn btn-default btn-lg" onclick="ingresar()" accesskey="intro">Ingresar</button>
        </div>

      </form>
    </div>









    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
  </body>

  <footer class="footer">
    <div class="container">
      <br><br><hr>
      <p class="pull-left">Copyright &copy; Nemixs - <?php echo date("Y/m/d h:i:s A") ?></p>
    </div>
</footer>

</html>
\ 

</html>