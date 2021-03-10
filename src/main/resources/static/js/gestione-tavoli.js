function creaTavolo(tavoloJSON)
{
    let id_servizio = 1;
    var tavoloTemplate = [
        '<div id="tavolo',
        tavoloJSON.id,
        '" class="col-md">',
        '<input id="servizio_tavolo',
        tavoloJSON.id,
        '" name="prodId" type="hidden" value="',
        id_servizio,
        '">',
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

function aggiornaMappaTavoli() {
    $.ajax({
        url: "tavoli"
    }).then(function (lista_tavoli) {
        $('#mappa-tavoli').empty();
        $('#mappa-tavoli').append(sistemaTavoli(lista_tavoli));
    });
}


