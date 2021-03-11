function aggiungiOrdine(ordine)
{
    $.post( "ordini", ordine );
}

function aggiungiListaOrdini(ordini)
{
    ordini.forEach(el => aggiungiOrdine(el));
}

function creaOrdineInElenco(o, p)
{
    var templateOrdineInElenco = [
        '<div  class="col-sm-6">',
        p.nome,'</div> <div class="col-sm-4"> x',
        o.quantita,
        '<button onclick="cancellaElementoOrdine(',
        o.id,
        ')" class="icons8-cestino"></button>' +
        '<div class="meno"><input  type="button" class="tastomeno" name="bottone" value="-" ' +
        'onClick="modificaQuantitaOrdine(',
        o.id,
        ', ',
        o.quantita,
        ', -1)"></div>\n' +
        '        <div class="piu"><input type="button" class="tastopiu" name="bottone" value="+" ' +
        'onClick="modificaQuantitaOrdine(',
        o.id,
        ',',
        o.quantita,
        ', 1)"></div></div> <div class="col-sm-2">€ ',
        parseFloat(p.prezzo) * parseInt(o.quantita),
        '</div>'
    ];
    return templateOrdineInElenco.join('');
}

function cancellaElementoOrdine(id)
{
    removeItemOnce(ordine, findById(ordine, id));
    aggiornaListaOrdini();
}

function aggiornaListaOrdini() {
    $('#elenco-ordini').empty();
    $('#elenco-ordini').append(creaElencoOrdiniInCorso(ordine));
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
    else ordine.push({'id': id, "quantita":  parseInt(fieldQuant), "id_servizio": 1});

    aggiornaListaOrdini();
    $(piattoId).text(1);
}


function modificaQuantitaOrdine(el, quant, variazione)
{
    let somma = parseInt(quant) + variazione;
    //let i = ordine.indexOf(el);
    console.log(el);
    if (somma >= 1)
        findById(ordine, el).quantita=somma;
    aggiornaListaOrdini();
}
function modificaQuantita(el, id, variazione)
{
    let somma = parseInt($(id).text()) + variazione;
    if (somma >= 1)
        $(id).text(somma);
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
        //console.log(ordini[i]);
        let id_piatto = ordini[i].id;
        //console.log(ordini[i]);
        let piatto = findById(lista_piatti, id_piatto);

        totale += parseFloat(piatto.prezzo) * parseInt(ordini[i].quantita);
        elenco_ordini = elenco_ordini.concat(creaOrdineInElenco(ordini[i], piatto));
    }
    elenco_ordini = elenco_ordini.concat('</div></div>');
    let templateTotale = [
        '<div class="totale"><h3>Totale</h3>\n' +
        '                            <input type=text id=tot  value=',
        totale,
        '>\n' +
        '                        </div>',
        '<div id="inviaordine"><button type="button" class="btn btn-primary" onclick="inviaOrdine()">Invia Ordine</button> </div>'
    ]

    //$('#nav-ordine').append(templateTotale.join(''));
    elenco_ordini = elenco_ordini.concat(templateTotale.join(''));
    return elenco_ordini;
}

function inviaOrdine()
{
    if (ordine.length>0)
    {
        $('#inviaordine').removeClass('bordo-rosso');
        aggiungiListaOrdini(ordine);
        $('#nav-ordine').append('<div id="ordine-successo" class="box-not successo"><span>Ordine salvato con successo! </span></div>\n' +
            '  </div>');
        $('#ordine-successo').delay(3000).fadeOut();
    }
    else
    {
        $('#nav-ordine').append('<div id="ordine-errore" class="box-not errore"><span>L\'ordine è vuoto!</span></div>\n' +
            '  </div>');
        $('#ordine-errore').delay(3000).fadeOut();
    }
}
