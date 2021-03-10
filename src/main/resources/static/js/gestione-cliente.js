function aggiungiCliente(cliente)
{
    $.post( "clienti", cliente );
}
function aggiungiListaClienti(clienti)
{
    clienti.forEach(el => aggiungiCliente(el));
}

function clickBottoneCliente()
{
    let nome = $('#nome-cliente').val();
    let cognome = $('#cognome-cliente').val();
    let telefono = $('#telefono-cliente').val();
    if (telefono==='')
    {
        $('#telefono-cliente').css('border', '2px solid red');
    }
    else
    {
        let clienteJSON = {
            'nome': nome===''?null:nome,
            'cognome': cognome===''?null:cognome,
            'cellulare': telefono,
            'id_servizio': 1
        }
        aggiungiCliente(clienteJSON);
    }

}