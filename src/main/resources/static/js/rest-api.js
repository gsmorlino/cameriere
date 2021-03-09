function findById(list, id)
{
    for(var i = 0, len = list.length; i < len; i++)
    {
        if(list[i].id=id)
        {
            return list[i];
        }
    }
}



function aggiungiCliente(cliente)
{
    $.post( "clienti", cliente );
}
function aggiungiListaClienti(clienti)
{
    clienti.forEach(el => aggiungiCliente(el));
}

function aggiungiOrdine(ordine)
{
    $.post( "ordini", ordine );
}

function aggiungiListaOrdini(ordini)
{
    ordini.forEach(el => aggiungiOrdine(el));
}

function aggiornaMappaTavoli() {
    $.ajax({
        url: "tavoli"
    }).then(function (lista_tavoli) {
        $('#mappa-tavoli').append(sistemaTavoli(lista_tavoli));
    });
}

function getMenu() {
    var tmp;
    $.ajax({
        url: "menu"
    }).then(function (data) {
        tmp = data;
    });
    return tmp;
}

function getAntipasti() {
    $.ajax({
        url: "antipasti"
    }).then(function (attivi) {
        $('#antipasti').append(creaCategoriaMenu(attivi));
    });
}

$(document).ready(function() {

    var ordine = [];
    var input = [{id: 1}, {id: 2}, {id: 3}];
    var cliente = {"nome": "Lilla", "cognome": "Pasticcia", "cellulare":"3727472"}
    var ordine_test = {"id_piatto": 6, "id_servizio":1, "quantita":2}
    //aggiungiCliente(cliente);
    //aggiungiOrdine(ordine_test);
    var lista_piatti = getMenu();
    aggiornaMappaTavoli();
    getAntipasti();
    //$('.container').eq(0).find('.col-md').eq(1).append($('#template-tavolo-singolo').html())


});


function clickBottoneTavolo(elemn, id)
{
    //elemn.style.color='blue';
    $('#exampleModalScrollableTitle').text('Tavolo '+id);
    ordine = [];
}





function creaElencoOrdiniInCorso(ordini)
{
    var elenco_ordini = "";
    let totale = 0.0;
    for (i in ordini)
    {
        elenco_ordini = elenco_ordini.concat(creaOrdineInElenco(ordini[i]));
    }
}

function creaOrdineInElenco(o)
{
    var templateOrdineInElenco = [
        '<div  class="col-sm-7">',
        findById(lista_piatti, o.id).nome,'</div> <div class="col-sm-2"> x',
        o.quantita,
        '</div> <div class="col-sm-3">€ ',
        findById(lista_piatti, o.id).prezzo,
        '</div>'
    ];
    return templateOrdineInElenco.join('');
}

function aggiungiAllOrdine(el, id, piattoId)
{

    k = -1;
    for (i in ordine)
    {
        if (ordine[i].id == id)
        {
            k = i;
            break;
        }
    }
    let fieldQuant = $(piattoId).text();
    if (k>=0)
    {
        ordine[k].quantita=parseInt(ordine[k].quantita) + parseInt(fieldQuant);
    }
    else ordine.push({'id': id, "quantita":  parseInt(fieldQuant)});

    console.log(ordine);
    $('.menuordine .row')
    {

    }
    $(piattoId).text(1);
}

function modificaQuantita(el, id, variazione)
{
    //console.log($(id).text());
    let somma = parseInt($(id).text()) + variazione;
    if (somma >= 0)
        $(id).text(somma);
}

function creaPiatto(piattoJSON)
{
    var piattoId = "piatto"+piattoJSON.id;

    var piattoTemplate = [

        '<p class="testomenu">',
        piattoJSON.nome,
        '</p>\n' +
        '  <p class="descrizione"> ',
        piattoJSON.descrizione,
        '</p>\n' +
        '   <div class="tabellaincremento">\n' +
        '   \n' +
        '            <div class="meno"><input  type="button" class="tastomeno" name="bottone" value="-" onClick="modificaQuantita(this,',
                piattoId ,
        '        , -1)"></div>\n' +
        '           <div class="numero"> <p id="',
        piattoId,
        '" style="color:white">0</p></div>\n' +
        '           <div class="piu"><input type="button" class="tastopiu" name="bottone" value="+" onclick="modificaQuantita(this,',
        piattoId,
        ', 1)"></div>\n' +
        '             </div>',
        '<a href="#" class="btn btn-primary a-btn-slide-text" onclick="aggiungiAllOrdine(this, ',
        piattoJSON.id,
        ', ',
        piattoId,
        ')">\n' +
        '        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>\n' +
        '        <span><strong>Add</strong></span>            \n' +
        '    </a>'
    ]

    return piattoTemplate.join('');
}

function creaPiattoSenzaQuantita(piattoJSON)
{
    var piattoId = "piatto"+piattoJSON.id;
    var piattoTemplate = [
        '<p class="testomenu">',
        piattoJSON.nome + ' (€ '+ piattoJSON.prezzo + ')</p>'
    ]

    return piattoTemplate.join('');
}



function creaCategoriaMenu(listaPiatti)
{
    let out = '';
    listaPiatti.forEach(el => out = out.concat(creaPiatto(el)));
    return out;
}


function creaTavolo(tavoloJSON)
{
    var tavoloTemplate = [
        '<div class="col-md">',
        '<img class="tavoli" src="resources/img/image.jpg">',
        '<div class="btn-group" role="group" aria-label="Third group">',
        '<button onclick="clickBottoneTavolo(this, ',
        tavoloJSON.id || 'Cazzo',
        ')" type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalScrollable">',
        tavoloJSON.id || 'Cazzo',
        '</button>',
        '</div>',
        '</div>'
    ]
    return tavoloTemplate.join('');
}

/*
Accetta un JSON di tavoli e genera un container con i tavoli
 */
function sistemaTavoli(listaTavoli)
{
    length = listaTavoli.length;

    k = 0;
    numCol = 4;
    numeroRighe = Math.floor(length/numCol) + 1;
    console.log(numeroRighe);
    let out = '';
    out = out.concat('<div class="container">');
    for (i=0; i<numeroRighe; i++) {
        out = out.concat('<div class="row">');
        for (j = 0; j < numCol; j++) {
            if (k >= length) out = out.concat('<div class="col-md"></div>');
            else out = out.concat(creaTavolo(listaTavoli[k++]));
            console.log(listaTavoli[k]);
        }
        out = out.concat('</div>');
    }
    out = out.concat('</div>');
    return $(out);
}



/*
$(document).ready(function() {
    $.ajax({
        url: "localhost:8081/listatavoli"
    }).then(function(attivi) {
        for (t in attivi) {
            $('#tutti-i-tavoli').append();
        }
    });
});*/
