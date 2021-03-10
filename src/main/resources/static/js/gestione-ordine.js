function aggiungiOrdine(ordine)
{
    $.post( "ordini", ordine );
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

function aggiungiListaOrdini(ordini)
{
    ordini.forEach(el => aggiungiOrdine(el));
}

function modificaQuantita(el, id, variazione)
{
    let somma = parseInt($(id).text()) + variazione;
    if (somma >= 0)
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
