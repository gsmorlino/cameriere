<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>App Pizzeria</title>
    <link rel="stylesheet" href="resources/css/bootstrap.min.css">
    <link rel="stylesheet" href="resources/css/style.css">

    <!-- CONTATORI -->
    <script type="text/javascript">
        var s = 0;

        function contatore() {
            s = s + 1;
            document.getElementById('conteggi').innerHTML = s;
        }
    </script>

    <script type="text/javascript">
        var s = 0;

        function diminuisci() {
            s = s - 1;
            if (s < 0) {
                s = 0;
            }
            document.getElementById('conteggi').innerHTML = s;
        }
    </script>


</head>

<body onload="startTime()">

<div class=container.fluid id="barra">
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">

        <!-- Ora -->
        <div style="color: #f8f9fa" id="txt" class="orologio">
            <script>
                function startTime() {
                    var today = new Date();
                    var h = today.getHours();
                    var m = today.getMinutes();
                    var s = today.getSeconds();
                    var giorno = today.getDate();//Day();
                    var mese = today.getMonth() + 1;
                    var date = today.getDate();
                    var year = today.getFullYear();
                    // add a zero in front of numbers<10
                    giorno = checkTime(giorno);
                    mese = checkTime(mese);
                    year = checkTime(year);
                    m = checkTime(m);
                    s = checkTime(s);
                    document.getElementById("txt").innerHTML = giorno + " " + mese + " " + year + " " + h + ":" + m + ":" + s;
                    var t = setTimeout(function () {
                        startTime()
                    }, 500);
                }

                function checkTime(i) {
                    if (i < 10) {
                        i = "0" + i;
                    }
                    return i;
                }
            </script>
        </div>


        <a class="navbar-brand" href="">
            <img src="https://www.ricettapizzanapoletana.it/wp-content/uploads/2019/07/pizza-napoletana.jpg" width="80"
                 height="60" alt="">
            <span id="titolo">Pizzeria GENERATION</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">


                <li class="nav-item active">
                    <a class="nav-link" href="salaEsterna">Sala Esterna <span class="sr-only"></span></a>
                </li>
                <!-- Nomi degli sviluppatori -->

                <button type="button" class="nav-link " data-toggle="modal" data-target="#staticBackdrop" style="color: white; margin-left: 20px">
                    Informazioni
                </button>




            </ul>
        </div>

    </nav>

</div>
<!-- Nomi degli sviluppatori -->
<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title titolo-nomi-sviluppatori" id="staticBackdropLabel">Nomi degli sviluppatori</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div class="modal-body" >
                <h4 style="color:orange">Giuseppe Morlino <span class="mansioni">- backend</span> <br>
                    Mirko Elia <span class="mansioni">- backend</span>  <br>
                    Giacomo Luparelli <span class="mansioni">- frontend</span>  <br>
                    Mario Michele Giagnorio <span class="mansioni">- frontend</span>  <br>
                    Nunzio Castagnaro <span class="mansioni">- frontend</span> <br>
                </h4>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
            </div>
        </div>
    </div>
</div>
<!-- TABELLA SERVIZI TAVOLO -->
<div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">Tavolo 1 (posti a sedere: 15)</h5>

            </div>
            <div class="modal-body">

                <!-- CONTENUTO DEL TAVOLO -->
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-menu-tab" data-toggle="tab" href="#nav-menu"
                           role="tab" aria-controls="nav-menu" aria-selected="true">Menu</a>
                        <a class="nav-item nav-link" id="nav-ordine-tab" data-toggle="tab" href="#nav-ordine" role="tab"
                           aria-controls="nav-ordine" aria-selected="false">Ordine</a>
                        <a class="nav-item nav-link" id="nav-cliente-tab" data-toggle="tab" href="#nav-cliente"
                           role="tab" aria-controls="nav-cliente" aria-selected="false">Cliente</a>
                        <a class="nav-item nav-link" id="nav-scontrino-tab" data-toggle="tab" href="#nav-scontrino"
                           role="tab" aria-controls="nav-scontrino" aria-selected="false">Scontrino</a>
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

                            <h4 id="list-bevande">Bevande</h4>
                            <hr>
                            <div id="bevande">

                            </div>

                            <h4 id="list-dolci">Dolci</h4>
                            <hr>
                            <div id="dolci">

                            </div>

                        </div>

                    </div>

                    <!-- CONTENUTO ORDINE -->
                    <div class="tab-pane fade" id="nav-ordine" role="tabpanel" aria-labelledby="nav-ordine-tab">

                        <div id="elenco-ordini">

                        </div>

                        <div id="elenco-ordini-inviati">

                        </div>
                    </div>


                    <!-- CONTENUTO CLIENTE -->
                    <div class="tab-pane fade" id="nav-cliente" role="tabpanel" aria-labelledby="nav-cliente-tab">

                        <form>
                            <div class="form-group">
                                <label for="nome-cliente"></label>
                                <input type="text" class="form-control" id="nome-cliente" placeholder="Nome">
                            </div>
                            <div class="form-group">
                                <label for="cognome-cliente"></label>
                                <input type="text" class="form-control" id="cognome-cliente" placeholder="Cognome">
                            </div>
                            <div class="form-group">
                                <label for="telefono-cliente"></label>
                                <input required="true" type="text" class="form-control" id="telefono-cliente"
                                       placeholder="Numero Telefonico">
                            </div>
                            <button id="aggiungiCliente" onclick="clickBottoneCliente()" type="button" class="btn btn-primary">Aggiungi
                            </button>
                        </form>

                    </div>

                    <div class="tab-pane fade" id="nav-scontrino" role="tabpanel" aria-labelledby="nav-scontrino-tab">
                        <form action="scontrino" type="post">
                        <div id="scontrino">
                            <input id="id_servizio_scontrino" type="hidden" name="id" value="">
                            <input id="id_tavolo_scontrino" type="hidden" name="id_tavolo" value="">
                            <!--<button onclick="location.href='scontrino?id=4'" type="submit" class="btn btn-primary"
                                    id="stampascontrino">&#x1f5b6 Stampa scontrino
                            </button>-->

                            <input onclick="inviaScontrino()" id="stampascontrino" type="submit" value="&#x1f5b6 Stampa scontrino" class="btn btn-primary">

                        </div>

                        </form>
                        <div id="svuota">
                            <button onclick="liberaTavolo()" id="liberatavolo"  class="btn libero">Libera tavolo</button>
                        </div>
                    </div>
                </div>


            </div>
            <div class="modal-footer">

                <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>

            </div>
        </div>
    </div>
</div>

<!-- Modal OCCUPA TAVOLO-->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="id_tavolo_libero" value="">

                <div id="occupatavolo">
                    <button type="button" onclick="occupaTavolo()" class="btn btn-primary" id="tastooccupatavolo"> Occupa tavolo </button>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
            </div>
        </div>
    </div>
</div>

<div class="sfondo">
    <h4 id="nome-sala">SALA INTERNA</h4>


    <div id="mappa-tavoli">

    </div>

</div>

</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="/resources/js/bootstrap.bundle.min.js"></script>
<script src="/resources/js/gestione-tavoli.js"></script>
<script src="/resources/js/gestione-menu.js"></script>
<script src="/resources/js/gestione-ordine.js"></script>
<script src="/resources/js/gestione-cliente.js"></script>
<script src="/resources/js/rest-api.js"></script>

</body>
</html>