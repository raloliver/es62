var fields = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')    
]

console.log(fields);
//selecionar elemento na view para carregamento dos dados
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
    //evitar o submit do formulário
    event.preventDefault();

    //criar linha da tabela
    var tr = document.createElement('tr');

    //preencher tabela com os dados inseridos nos campos
    fields.forEach(function(item){
        //criar coluna da tabela
        var td = document.createElement('td');
        td.textContent = item.value;
        tr.appendChild(td);
    });

    //criar coluna final da tabela chamada "Volume"
    var tdTotal = document.createElement('td');
    tdTotal.textContent = fields[1].value * fields[2].value;

    //adicionar mais um coluna ao final da tabela
    tr.appendChild(tdTotal);

    //adicionar tabela a view
    tbody.appendChild(tr);

    //limpar os campos após a inclusão dos dados
    fields[0].value = '';
    fields[1].value = 1;
    fields[2].value = 0;

    //foco no campo data
    fields[0].focus();
});