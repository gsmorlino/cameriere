<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>App Pizzeria</title>
    <link rel="stylesheet" href="../../../resources/static/css/bootstrap.css">
    <link rel="stylesheet" href="../../../resources/static/css/Style.css">


</head>

<body>

<div class= container.fluid>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">

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
                    <a class="nav-link" href="PrimaPagina.jsp">Sala Interna <span class="sr-only">(current)</span></a>
                </li>

            </ul>
        </div>

    </nav>

</div>


<div class="sfondoesterno">
    <h4>SALA ESTERNA</h4>

    <div class="container">
        <div class="row">
            <div class="col-md">
                <img class="tavoli" src="../../../resources/static/img/image.jpg">
                <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-dark">9</button>
                </div>
            </div>
            <div class="col-md">
                <img class="tavoli" src="../../../resources/static/img/image.jpg">
                <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-dark">10</button>
                </div>
            </div>
            <div class="col-md">
                <img class="tavoli" src="../../../resources/static/img/image.jpg">
                <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-dark">11</button>
                </div>
            </div>
            <div class="col-md">
                <img class="tavoli" src="../../../resources/static/img/image.jpg">
                <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-dark">12</button>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md">
                <img class="tavoli" src="../../../resources/static/img/image.jpg">
                <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-dark">13</button>
                </div>
            </div>
            <div class="col-md">
                <img class="tavoli" src="../../../resources/static/img/image.jpg">
                <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-dark">14</button>
                </div>
            </div>
            <div class="col-md">
                <img class="tavoli" src="../../../resources/static/img/image.jpg">
                <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-dark">15</button>
                </div>
            </div>
            <div class="col-md">
                <img class="tavoli" src="../../../resources/static/img/image.jpg">
                <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-dark">16</button>
                </div>
            </div>
        </div>
    </div>

</div>




<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="../../../resources/static/js/bootstrap.bundle.min.js"></script>
</body>
</html>