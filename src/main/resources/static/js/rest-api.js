$(document).ready(function() {

    var input = [{id: 1}, {id: 2}, {id: 3}];
    console.log("ciao");
    $.ajax({
        url: "listatavoli"
    }).then(function(attivi) {
        $('.sfondo').append(sistemaTavoli(attivi));
    });
    //$('.container').eq(0).find('.col-md').eq(1).append($('#template-tavolo-singolo').html())


});

function creaTavolo(tavoloJSON)
{
    var tavoloTemplate = [
        '<div class="col-md">',
        '<img class="tavoli" src="/resources/img/image.jpg">',
        '<div class="btn-group" role="group" aria-label="Third group">',
        '<button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalScrollable">',
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
