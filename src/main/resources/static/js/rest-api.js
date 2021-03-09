var lista_piatti = getMenu();





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
            $('#mappa-tavoli').empty();
            $('#mappa-tavoli').append(sistemaTavoli(lista_tavoli));
        });
    }
    aggiornaMappaTavoli();
    setInterval(aggiornaMappaTavoli, 20*1000);


function getMenu() {
    return  $.ajax({
        url: 'menu',
        async: false,
        dataType: 'json'
    }).responseJSON;
}

/*function getAntipasti() {
    $.ajax({
        url: "antipasti"
    }).then(function (attivi) {
        $('#antipasti').append(creaCategoriaMenu(attivi));
    });
}*/
function getRest(url) {
    return  $.ajax({
        url: url,
        async: false,
        dataType: 'json'
    }).responseJSON;
}
function getAntipasti()
{
    $('#antipasti').empty();
    $('#antipasti').append(creaCategoriaMenu(getRest('antipasti')))
}
function getPizze()
{
    $('#pizze').empty();
    $('#pizze').append(creaCategoriaMenu(getRest('pizze')))
}

function getBevande()
{
    $('#bevande').empty();
    $('#bevande').append(creaCategoriaMenu(getRest('bevande')))
}

function getDolci()
{
    $('#dolci').empty();
    $('#dolci').append(creaCategoriaMenu(getRest('dolci')))
}

function generaMenu() {

    getAntipasti();
    getPizze();
    getBevande();
    getDolci();
}

$(document).ready(function() {

    var ordine = [];
    var input = [{id: 1}, {id: 2}, {id: 3}];
    var cliente = {"nome": "Lilla", "cognome": "Pasticcia", "cellulare":"3727472", "id_servizio": 1}
    var ordine_test = {"id_piatto": 6, "id_servizio":1, "quantita":2}
    aggiungiCliente(cliente);
    //aggiungiOrdine(ordine_test);

    aggiornaMappaTavoli();
    generaMenu();
    //$('.container').eq(0).find('.col-md').eq(1).append($('#template-tavolo-singolo').html())


});


function clickBottoneTavolo(elemn, id, posti)
{
    //elemn.style.color='blue';
    $('#exampleModalScrollableTitle').text('Tavolo '+id + ' (posti a sedere: ' +posti + ')');
    ordine = [];
    aggiornaListaOrdini();
    generaMenu();
    /*
    TODO
        clienti
        scontrino
     */
}





function creaElencoOrdiniInCorso(ordini)
{
    let elenco_ordini = "";
    let totale = 0.0;
    console.log(ordini);
    elenco_ordini = elenco_ordini.concat('<div class="menuordine">\n' +
        '                            <div class="row">')
    for (let i in ordini)
    {
        console.log(ordini[i]);
        let id_piatto = ordini[i].id;
        console.log(ordini[i]);
        let piatto = findById(lista_piatti, id_piatto);

        totale += parseInt(piatto.prezzo) * parseInt(ordini[i].quantita);
        elenco_ordini = elenco_ordini.concat(creaOrdineInElenco(ordini[i], piatto));
    }
    elenco_ordini = elenco_ordini.concat('</div></div>');
    let templateTotale = [
        '<div class="totale"><h3>Totale</h3>\n' +
        '                            <input type=text id=tot  value=',
        totale,
        '>\n' +
        '                        </div>'
    ]

    //$('#nav-ordine').append(templateTotale.join(''));
    elenco_ordini = elenco_ordini.concat(templateTotale.join(''));
    return elenco_ordini;
}
function findById(list, id)
{
    for(let i in list)
    {
        if(list[i].id==id)
        {
            return list[i];
        }
    }
}
function creaOrdineInElenco(o, p)
{
    var templateOrdineInElenco = [
        '<div  class="col-sm-7">',
        p.nome,'</div> <div class="col-sm-2"> x',
        o.quantita,
        '<button onclick="cancellaElementoOrdine(',
        o.id,
        ')" class="icons8-cestino"></button></div> <div class="col-sm-3">€ ',
        p.prezzo,
        '</div>'
    ];
    return templateOrdineInElenco.join('');
}

function cancellaElementoOrdine(id)
{
    removeItemOnce(ordine, findById(ordine, id));
    aggiornaListaOrdini();
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function aggiornaListaOrdini() {
    $('#nav-ordine').empty();
    $('#nav-ordine').append(creaElencoOrdiniInCorso(ordine));
}

function aggiungiAllOrdine(el, id, piattoId)
{

    let k = -1;
    for (let i in ordine)
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

    aggiornaListaOrdini();
    $(piattoId).text(1);
}

function modificaQuantita(el, id, variazione)
{
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
        '</p>' +
        '  <p class="descrizione"> ',
        piattoJSON.descrizione,
        '</p>' +
        '   <div class="tabellaincremento">' +
        '   ' +
        '            <div class="meno"><input  type="button" class="tastomeno" name="bottone" value="-" onClick="modificaQuantita(this,',
                piattoId ,
        '        , -1)"></div>' +
        '           <div class="numero"> <p class="conteggi" id="',
        piattoId,
        '" style="color:white">1</p></div>' +
        '           <div class="piu"><input type="button" class="tastopiu" name="bottone" value="+" onclick="modificaQuantita(this,',
        piattoId,
        ', 1)"></div>' +
        '             </div>',
        '<a href="#" class="btn btn-primary a-btn-slide-text" onclick="aggiungiAllOrdine(this, ',
        piattoJSON.id,
        ', ',
        piattoId,
        ')">' +
        '        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>' +
        '        <span><strong>Add</strong></span>            ' +
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
        '<div id="tavolo',
        tavoloJSON.id,
        '" class="col-md">',
        '<img class="tavoli" src="resources/img/image.jpg">',
        '<div class="btn-group" role="group" aria-label="Third group">',
        '<button onclick="clickBottoneTavolo(this, ',
        tavoloJSON.id || 'Cazzo',
        ', ', tavoloJSON.posti, ' ) " type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalScrollable">',
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

    let out = '';
    out = out.concat('<div class="container">');
    for (i=0; i<numeroRighe; i++) {
        out = out.concat('<div class="row">');
        for (j = 0; j < numCol; j++) {
            if (k >= length) out = out.concat('<div class="col-md"></div>');
            else out = out.concat(creaTavolo(listaTavoli[k++]));

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
