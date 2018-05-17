class DealController {

    constructor() {
        //sem usar o .bind invocando o document, não funciona pois 
        //internamente, o qs é um método que faz uma chamada ao this
        //se apenas atribuirmos o método a uma variável, estamos convertendo o método numa função
        //ao usar o .bind, mantemos a associação do método com o document
        let $ = document.querySelector.bind(document);
        this._date = $('#data');
        this._quantity = $('#quantidade');
        this._valuation = $('#valor');
    }

    create(event) {
        event.preventDefault();
        //receber a data
        //nesse exemplo, devemos receber o valor como (2017, 03, 28) levando em consideração que no mês a contagem começa do 0, por isso 3 e não 4.
        //usando o spread operator (...) para que o array passado como argumento da função, seja desmembrado.
        //para decrementar o mês, é necessário retornar um novo array, usando o .map e se for o segundo item do array, decrementar 1
        /*
        let data = new Date(...this._date.value
                                    .split('-')
                                    .map(function (item, index) {
                                        //se preferir não usar o if, pode usar o % (módulo)
                                        return item - index % 2;
                                        //if, também é válido, porém mais verboso
                                        if (index == 1) {
                                            return item - 1;
                                        }
                                        return item;                                           
                                    })
                            );    
        // agora usando as novas e famosas arrow functions
        // da pra remover o nome function e usar no lugar =>
        // caso a função tenha uma única instrução (assim como no if) você pode omitir as {}
        // e como tenho uma única instrução no exemplo, a arrow function se encarrega de aplicar o return
        */
        let date = new Date(
            ...this._date.value
                .split('-')
                .map((item, index) => item - index % 2)
            );         
        //a data chega como string (também pode receber como number) no seguinte formato YYYY-MM-DD, é necessário converter ela em formato de data e em seguida num array, pois o new Date, aceita um array com os valores de ano, mês e dia ["2017","04","28"]
        //dentro do construtor Date, existe um método .join, que une os paramêtros numa string usando a vírgula como separador
        /*
        let data = new Date(this._date.value.replace(/-g/, ',')); // usando uma RegEx
        let data = new Date(this._date.value.split('-')); // usando o método split
        */ 
        //criar a negociação
        let createDeal = new Deal(
            date,
            this._quantity.value,
            this._valuation.value
        );
        //pegando os dados (isso até que vai funcionar, mas ao percorrer demais o DOM, perdemos em performance)
        //por isso a necessidade de um construtor para buscar esses dados como propriedades
        /*
        let data = $('#data');
        let quantidade = $('#quantidade');
        let valor = $('#valor');
        */ 
        
        //converter formato da data
        let dateFormat = createDeal.date.getDate() + '/' + (createDeal.date.getMonth() + 1) + '/' + createDeal.date.getFullYear();
        console.log(dateFormat)
    }

}