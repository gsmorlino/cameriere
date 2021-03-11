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
    getOrdiniInviati();
    $('#elenco-ordini-inviati').empty();
    $('#elenco-ordini-inviati').append(creaElencoOrdiniInviati(ordini_inviati));
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
    else {
        console.log(id_servizio);
        ordine.push({'id': id, "quantita":  parseInt(fieldQuant), "id_servizio": id_servizio});
    }

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
    if (ordini.length===0) return "";
    let elenco_ordini = "";
    let totale = 0.0;
    console.log(ordini);
    elenco_ordini = elenco_ordini.concat('<h6>Ordine In Corso</h6><div class="menuordine">\n' +
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
    if (ordini.length!==0) {
        let templateTotale = [
            '<div class="totale"><h3>Totale</h3>\n' +
            '                            <input readonly="text" class=tot  value=',
            totale,
            '>\n' +
            '                        </div>',
            '<div id="inviaordine"><button type="button" class="btn btn-primary" onclick="inviaOrdine()">Invia Ordine</button> </div>'
        ]

        //$('#nav-ordine').append(templateTotale.join(''));
        elenco_ordini = elenco_ordini.concat(templateTotale.join(''));
    }

    return elenco_ordini;
}

function inviaOrdine()
{
    if (ordine.length>0)
    {
        aggiungiListaOrdini(ordine);
        ordine = [];
        $('#nav-ordine').prepend('<div id="ordine-successo" class="box-not successo"><span>Ordine salvato con successo! </span></div>\n' +
            '  </div>');
        $('#ordine-successo').delay(3000).fadeOut();
    }
    else
    {
        $('#nav-ordine').prepend('<div id="ordine-errore" class="box-not errore"><span>L\'ordine è vuoto!</span></div>\n' +
            '  </div>');
        $('#ordine-errore').delay(3000).fadeOut();
    }
    setTimeout(aggiornaListaOrdini(), 5000);

}

function getOrdiniInviati()
{
    ordini_inviati = getRest('ordini?id='+id_servizio);
    console.log(ordini_inviati);
}

function creaElencoOrdiniInviati(ordinelli)
{
    if (ordinelli.length===0) return "";
    let elenco_ordini_inviati = "";

    let totale = 0.0;
    console.log(ordinelli);
    elenco_ordini_inviati = elenco_ordini_inviati.concat('<h6>Ordine Inviato</h6>\n' +
        '        <div class="menuordine">\n' +
        '                            <div class="row sec">')
    for (let i in ordinelli)
    {
        //console.log(ordini[i]);
        let id_piatto = ordinelli[i].id_piatto;
        //console.log(ordini[i]);
        let piatto = findById(lista_piatti, id_piatto);

        totale += parseFloat(piatto.prezzo) * parseInt(ordinelli[i].quantita);
        elenco_ordini_inviati = elenco_ordini_inviati.concat(creaOrdineInElencoInviati(ordinelli[i], piatto));
    }
    elenco_ordini_inviati = elenco_ordini_inviati.concat('</div></div>');
    let templateTotale = [
        '<div class="totale"><h3>Totale</h3>\n' +
        '                            <input readonly="text" class=tot  value=',
        totale,
        '>\n' +
        '                        </div>'
    ]

    //$('#nav-ordine').append(templateTotale.join(''));
    elenco_ordini_inviati = elenco_ordini_inviati.concat(templateTotale.join(''));
    return elenco_ordini_inviati;
}

function creaOrdineInElencoInviati(o, p)
{
    var templateOrdineInElenco = [
        '<div  class="col-sm-6">',
        p.nome,'</div> <div class="col-sm-4"> x',
        o.quantita,
        '</div><div class="col-sm-2">€ ',
        parseFloat(p.prezzo) * parseInt(o.quantita),
        '</div>'
    ];
    return templateOrdineInElenco.join('');
}
