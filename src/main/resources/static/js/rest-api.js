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


$(document).ready(function() {

    var ordine = [];
    var input = [{id: 1}, {id: 2}, {id: 3}];
    var cliente = {"nome": "Lilla", "cognome": "Pasticcia", "cellulare":"3727472"}
    var ordine_test = {"id_piatto": 6, "id_servizio":1, "quantita":2}
    //aggiungiCliente(cliente);
    //aggiungiOrdine(ordine_test);
    aggiornaMappaTavoli();
    $.ajax({
        url: "antipasti"
    }).then(function(attivi) {
        $('#antipasti').append(creaCategoriaMenu(attivi));
    });
    //$('.container').eq(0).find('.col-md').eq(1).append($('#template-tavolo-singolo').html())


});


function clickBottoneTavolo(elemn, id, posti)
{
    //elemn.style.color='blue';
    $('#exampleModalScrollableTitle').text('Tavolo '+id + ' (posti a sedere: ' +posti + ')');
    ordine = [];
}

function modificaQuantita(el, id, variazione)
{
    //console.log($(id).attr("value"));
    let somma = parseInt($(id).attr("value")) + variazione;
    if (somma >= 0)
        $(id).attr("value", somma);
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
    if (k>=0)
    {
        ordine[k].quantita=parseInt(ordine[k].quantita) + parseInt($(piattoId).attr("value"));
    }
    else ordine.push({'id': id, "quantita":  parseInt($(piattoId).attr("value"))});

    console.log(ordine);


    $(piattoId).attr("value", 1);
}

function creaPiatto(piattoJSON)
{
    var piattoId = "piatto"+piattoJSON.id;
    var piattoTemplate = [
        '<p class="testomenu">',
        piattoJSON.nome + ' (€ '+ piattoJSON.prezzo + ')</p>',
        '<div class="quantita">',
        '<button class="meno" onclick="modificaQuantita(this,',
        piattoId,
        ', -1)">-</button>',
        '<input type=text id="',
        piattoId,
        '" value=1 >',
        '<button class="piu" onclick="modificaQuantita(this,',
        piattoId,
        ', 1)">+</button>',
        '<button class="btn btn-primary a-btn-slide-text" onclick="aggiungiAllOrdine(this, ',
        piattoJSON.id,
        ', ',
        piattoId,
        ')">',
        'Add</button>',
        '</div>'
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
