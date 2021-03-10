function getMenu() {
    return  $.ajax({
        url: 'menu',
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


