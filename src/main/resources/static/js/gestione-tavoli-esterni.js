function creaTavolo(tavoloJSON, id_servizio)
{
    let tavoloTemplate = [];
    if (id_servizio===null)
    {
        tavoloTemplate = [
            '<div id="tavolo',
            tavoloJSON.id,
            '" class="col-md">',
            '<input id="servizio_tavolo',
            tavoloJSON.id,
            '" name="prodId" type="hidden" value="',
            '">',
            '<img class="tavoli" src="resources/img/image.jpg">',
            '<div class="btn-group" role="group" aria-label="Third group">',
            '<button onclick="clickBottoneTavoloLibero(this, ',
            tavoloJSON.id || 'Cazzo',
            ', ', tavoloJSON.posti, ' ) " type="button" class="btn libero" data-toggle="modal" data-target="#exampleModal">',
            tavoloJSON.id || 'Cazzo',
            '<br> (Posti: ',
            tavoloJSON.posti,
            ')</button>',
            '</div>',
            '</div>'
        ]
    }
    else
    {
        tavoloTemplate = [
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
            '<br> (Posti: ',
            tavoloJSON.posti,
            ')</button>',
            '</div>',
            '</div>'
        ]
    }
    return tavoloTemplate.join('');
}

function clickBottoneTavolo(elemn, id, posti)
{
    //elemn.style.color='blue';
    $('#exampleModalScrollableTitle').text('Tavolo '+id + ' (posti a sedere: ' +posti + ')');
    $('#id_servizio_scontrino').val($('#servizio_tavolo'+id).val());
    $('#id_tavolo_scontrino').val(id);
    ordine = [];
    id_servizio = servizioAssociatoAlTavolo(getAttivi(), id);
    aggiornaListaOrdini();
    generaMenu();
    svuotaCliente()
    /*
    TODO
        scontrino
     */
}

function clickBottoneTavoloLibero(elemn, id, posti)
{
    //elemn.style.color='blue';
    $('#exampleModalLabel').text('Tavolo '+id + ' (posti a sedere: ' +posti + ')');
    $('#id_tavolo_libero').val(id);
}

function occupaTavolo()
{
    let id = $('#id_tavolo_libero').val();
    $.post('inseriscitavoloattivo', {"id":id});
    setTimeout(aggiornaMappaTavoli(), 5000);
}

/*
Accetta un JSON di tavoli e genera un container con i tavoli
 */
function sistemaTavoli(listaTavoli, listaAttivi)
{
    let length = listaTavoli.length;

    let k = 0;
    let numCol = 4;
    let numeroRighe = Math.ceil(length/numCol);

    let out = '';
    out = out.concat('<div class="container">');
    for (i=0; i<numeroRighe; i++) {
        out = out.concat('<div class="row rigatavoli">');
        for (j = 0; j < numCol; j++) {
            if (k >= length) out = out.concat('<div class="col-md"></div>');
            else
            {
                let id_serv = servizioAssociatoAlTavolo(listaAttivi, listaTavoli[k].id);

                out = out.concat(creaTavolo(listaTavoli[k++], id_serv));

            }

        }
        out = out.concat('</div>');
    }
    out = out.concat('</div>');
    return $(out);
}

function servizioAssociatoAlTavolo(list, id)
{
    for(let i in list)
    {
        if(list[i].id_tavolo===id)
        {
            return list[i].id_servizio;
        }
    }
    return null;
}

function getAttivi() {
    return getRest('tavoliattivi');
}

function aggiornaMappaTavoli() {
    let tavoli = getRest('tavolisalaesterna');
    let attivi = getAttivi();
    $('#mappa-tavoli').empty();
    $('#mappa-tavoli').append(sistemaTavoli(tavoli, attivi));
}


