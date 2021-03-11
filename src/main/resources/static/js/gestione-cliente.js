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
        $('#telefono-cliente').addClass('bordo-rosso').delay(5000).queue(function(){
            $('#telefono-cliente').removeClass('bordo-rosso').dequeue();
        });
        $('#nav-cliente').append('<div id="cliente-errore" class="box-not errore"><span>Il numero di cellulare è necessario!</span></div>\n' +
            '  </div>');
        $('#cliente-errore').delay(2000).fadeOut();
        //$('#telefono-cliente').delay(3000).removeClass('bordo-rosso');
    }
    else
    {
        $('#telefono-cliente').removeClass('bordo-rosso');
        let clienteJSON = {
            'nome': nome===''?null:nome,
            'cognome': cognome===''?null:cognome,
            'cellulare': telefono,
            'id_servizio': 1
        }
        aggiungiCliente(clienteJSON);
        $('#nav-cliente').append('<div id="cliente-successo" class="box-not successo"><span>Cliente registrato </span></div>\n' +
            '  </div>');
        $('#cliente-successo').delay(3000).fadeOut();
    }

}

function svuotaCliente()
{
    $('#nome-cliente').val('');
    $('#cognome-cliente').val('');
    $('#telefono-cliente').val('');
}