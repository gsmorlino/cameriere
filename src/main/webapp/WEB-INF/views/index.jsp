<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>App Pizzeria</title>
<link rel="stylesheet" href="/resources/css/bootstrap.min.css">
<link rel="stylesheet" href="/resources/css/Style.css">


</head>

<body>

<div class= container.fluid>
 <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">

 <!-- Ora -->
 <div style="color: #f8f9fa"class="orologio">
 <script language="Javascript">

            data = new Date();
            ora =data.getHours();
            minuti=data.getMinutes();
            secondi=data.getSeconds();
            giorno = data.getDay();
            mese = data.getMonth();
            date= data.getDate();
            year= data.getFullYear();

            if(minuti < 10) minuti="0"+minuti;
            if(secondi < 10) secondi="0"+secondi;
            if(ora <10) ora="0"+ora;

            if(giorno == 0) giorno = "Domenica";
            if(giorno == 1) giorno = "Lunedì";
            if(giorno == 2) giorno = "Martedì";
            if(giorno == 3) giorno = "Mercoledì";
            if(giorno == 4) giorno = "Giovedì";
            if(giorno == 5) giorno = "Venerdì";
            if(giorno == 6) giorno = "Sabato";

            if(mese == 0) mese = "Gennaio";
            if(mese == 1) mese = "Febbraio";
            if(mese == 2) mese = "Marzo";
            if(mese == 3) mese = "Aprile";
            if(mese == 4) mese = "Maggio";
            if(mese == 5) mese = "Giugno";
            if(mese == 6) mese = "Luglio";
            if(mese == 7) mese = "Agosto";
            if(mese == 8) mese = "Settembre";
            if(mese == 9) mese = "Ottobre";
            if(mese == 10) mese = "Novembre";
            if(mese == 11) mese = "Dicembre";

            document.write(" "+giorno+" "+date+" "+mese+" "+year+" - ora "+ora+":"+minuti+":"+secondi);

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
        <a class="nav-link" href="SalaEsterna.jsp">Sala Esterna <span class="sr-only">(current)</span></a>
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
        <h5 class="modal-title" id="exampleModalScrollableTitle">$(TAVOLOSELEZ)</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <!-- CONTENUTO DEL TAVOLO -->
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Menu</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Cliente</a>
            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Ordine</a>
            <a class="nav-item nav-link" id="nav-contact-tab2" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Scontrino</a>
          </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div id="list-example" class="list-group">
              <a class="list-group-item list-group-item-action" href="#list-antipasti">Antipasti</a>
              <a class="list-group-item list-group-item-action" href="#list-pizze">Pizze</a>
              <a class="list-group-item list-group-item-action" href="#list-bevande">Bevande</a>
              <a class="list-group-item list-group-item-action" href="#list-dolci">Dolci</a>
            </div>
            <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
              <h4 id="list-antipasti">Antipasti</h4>
              <p>dfdfgfdgdfgdfgdffdgfdgdggdfgdfgfdgdfggfgdfgfdg</p>
              <h4 id="list-pizze">Pizze</h4>
              <p>dfdfgfdgdfgdfgdffdgfdgdggdfgdfgfdgdfdgdfgfdgdfgdfgdggfgdfgfdgfdtryertertertertrtertertretertertertrtertretetfggf</p>
              <h4 id="list-bevande">Bevande</h4>
              <p>dfdfgfdgdfgdfgdffdgfdgdggdfgdfgfdgdfggfgdfgfdgfdfggf</p>
              <h4 id="list-dolci">Dolci</h4>
              <p>dfdfgfdgdfgdfgdffdgfdgdggdfgdfgfdgdfggfgdfgfdgfdfggf</p>
            </div>
          </div>

          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
          <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
        </div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-primary">Salva</button>
      </div>
    </div>
  </div>
</div>

<div class="sfondo">
<h4>SALA INTERNA</h4>



</div>




<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="/resources/js/bootstrap.bundle.min.js"></script>
<script src="/resources/js/rest-api.js"></script>
</body>
</html>

