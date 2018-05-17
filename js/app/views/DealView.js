//trabalhando o conceito de herança no javascript
class DealView extends View {

    constructor(element) {

        super(element);
    }

    template(model) {
        //ao retornar uma template string, eu utilizo `` ao invés de '' que requer a concatenação por linha
        //com isso não manipulamos o dom de maneira imperativa, mas sim declarativa
        //como temos apenas um argumento na arrow function, não é necessário usar o () e como o retorno é único, não é necessário usar as {} nem o return
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.deals.map(deal => 
                    `
                        <tr>
                            <td>${DateHelper.dateDefaultFormat(deal.date)}</td>
                            <td>${deal.quantity}</td>
                            <td>${deal.valuation}</td>
                            <td>${deal.volume}</td>
                        </tr>
                    `
                ).join('')}
            </tbody>

            <tfoot>
                <td colspan="3"></td>
                <td>${model.deals.reduce((total, deal) => total + deal.volume, 0.0)}</td>
            </tfoot>
        </table>
        `;
        //template strings não devem conter funções com mais de uma expressão, por isso é sempre melhor usar programação funcional, por isso usamos o reduce, que recebe como segundo parâmetro o valor inicial do primeiro argumento da função no exemplo acima
        //abaixo sem usar o IIFE, mas usando reduce.
        /**
         * ${
            (function (){
                let total = 0;
                model.deals.forEach(deal => total+= deal.volume);
                return total;
            })()
            }
         */
    }

}