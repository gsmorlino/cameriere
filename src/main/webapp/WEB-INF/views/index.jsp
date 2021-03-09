<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>App Pizzeria</title>
<link rel="stylesheet" href="resources/css/bootstrap.min.css">
<link rel="stylesheet" href="resources/css/style.css">

<!-- CONTATORI -->
<script type="text/javascript">
        var s=0;
        function contatore() {
            s=s+1;
            document.getElementById('conteggi').innerHTML = s;
        }
        </script>

        <script type="text/javascript">
        var s=0;
        function diminuisci() {
            s=s-1;
            if(s < 0 ){
                s = 0;
            }
            document.getElementById('conteggi').innerHTML = s;
        }
        </script>


</head>

<body  onload="startTime()">

<div class= container.fluid>
 <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">

 <!-- Ora -->
 <div style="color: #f8f9fa" id="txt" class="orologio">
<script>
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var giorno = today.getDay();
  var mese = today.getMonth();
  var date= today.getDate();
  var year= today.getFullYear();
  // add a zero in front of numbers<10
  giorno = checkTime(giorno);
  mese = checkTime(mese);
  year = checkTime(year);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = giorno + " " + mese +  " " + year + " " + h + ":" + m + ":" + s;
  var t = setTimeout(function(){ startTime() }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
</script>
 </div>


  <a class="navbar-brand" href="#">
  	<img src="https://www.ricettapizzanapoletana.it/wp-content/uploads/2019/07/pizza-napoletana.jpg" width="80" height="60" alt="">
  	Pizzeria
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Servizi
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Menu</a>
          <a class="dropdown-item" href="#">Tavoli</a>
          </div>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="sala_esterna.jsp">Sala Esterna <span class="sr-only">(current)</span></a>
      </li>

    </ul>
  </div>

</nav>

</div>

<!-- TABELLA SERVIZI TAVOLO -->
<div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">Tavolo 1</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <!-- CONTENUTO DEL TAVOLO -->
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-menu-tab" data-toggle="tab" href="#nav-menu" role="tab" aria-controls="nav-menu" aria-selected="true">Menu</a>
                        <a class="nav-item nav-link" id="nav-ordine-tab" data-toggle="tab" href="#nav-ordine" role="tab" aria-controls="nav-ordine" aria-selected="false">Ordine</a>
                        <a class="nav-item nav-link" id="nav-cliente-tab" data-toggle="tab" href="#nav-cliente" role="tab" aria-controls="nav-cliente" aria-selected="false">Cliente</a>
                        <a class="nav-item nav-link" id="nav-scontrino-tab" data-toggle="tab" href="#nav-scontrino" role="tab" aria-controls="nav-scontrino" aria-selected="false">Scontrino</a>
                    </div>
                </nav>

                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-menu" role="tabpanel" aria-labelledby="nav-menu-tab">
                        <div id="list-example" class="list-group">
                            <a class="list-group-item list-group-item-action" href="#list-antipasti">Antipasti</a>
                            <a class="list-group-item list-group-item-action" href="#list-pizze">Pizze</a>
                            <a class="list-group-item list-group-item-action" href="#list-bevande">Bevande</a>
                            <a class="list-group-item list-group-item-action" href="#list-dolci">Dolci</a>
                        </div>
                        <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
                            <h4 id="list-antipasti">ANTIPASTI</h4>
                            <hr>
                            <div id="antipasti">


                            </div>
                            <h4 id="list-pizze">Pizze</h4>
                            <hr>
                            <div id="pizze">


                            </div>

                            <h4 id="list-dolci">Dolci</h4>
                            <hr>
                            <div id="dolci">

                            </div>

                            <h4 id="list-bevande">Bevande</h4>
                            <hr>
                            <div id="bevande">

                            </div>


                        </div>
                    </div>

                    <!-- CONTENUTO ORDINE -->
                    <div class="tab-pane fade" id="nav-ordine" role="tabpanel" aria-labelledby="nav-ordine-tab">
                        <div class="menuordine">
                            <div class="row">
                                <div  class="col-sm-7">Descrizione pizza</div> <div class="col-sm-2"> x 3 <button class="icons8-cestino"></button></div> <div class="col-sm-3">€ 5.50</div>

                                <div class="col-sm-7">Descrizione pizza</div> <div class="col-sm-2"> x 3</div> <div class="col-sm-3">€ 5.50</div>

                            </div>
                        </div>




                    </div>


                    <!-- CONTENUTO CLIENTE -->
                    <div class="tab-pane fade" id="nav-cliente" role="tabpanel" aria-labelledby="nav-cliente-tab">

                        <form>
                            <div class="form-group">
                                <label for="formGroupExampleInput"></label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome">
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2"></label>
                                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Cognome">
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput3"></label>
                                <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Nunero Telefonico">
                            </div>
                        </form>

                    </div>

                    <div class="tab-pane fade" id="nav-scontrino" role="tabpanel" aria-labelledby="nav-scontrino-tab">...</div>
                </div>


            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="aggiornaMappaTavoli()">Chiudi</button>
                <button type="button" class="btn btn-primary">Salva</button>
            </div>
        </div>
    </div>
</div>

<div class="sfondo">
<h4>SALA INTERNA</h4>

    <div id="mappa-tavoli">

    </div>

</div>




<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="/resources/js/bootstrap.bundle.min.js"></script>
<script src="/resources/js/rest-api.js"></script>
</body>
</html>