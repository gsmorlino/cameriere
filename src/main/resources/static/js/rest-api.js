function getRest(url) {
    return  $.ajax({
        url: url,
        async: false,
        dataType: 'json'
    }).responseJSON;
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

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}


$(document).ready(function() {

    ordine = [];
    const input = [{id: 1}, {id: 2}, {id: 3}];
    const cliente = {"nome": "Lilla", "cognome": "Pasticcia", "cellulare": "3727472", "id_servizio": 1};
    var ordine_test = {"id_piatto": 6, "id_servizio":1, "quantita":2}
    //aggiungiCliente(cliente);
    //aggiungiOrdine(ordine_test);

    lista_piatti = getMenu();
    setInterval(aggiornaMappaTavoli, 30*1000);
    aggiornaMappaTavoli();
    generaMenu();
});
















