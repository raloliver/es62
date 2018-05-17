class DealController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._date = $('#data');
        this._quantity = $('#quantidade');
        this._valuation = $('#valor');
        this._dealList = new DealList();

        this._dealView = new DealView($('#deal-view'));
        //além de adicionar a tabela na view é preciso preencher ela com os valores e isso deve ser feito também ao adicionar novas deals
        this._dealView.update(this._dealList);

        this._message = new Message();
        this._messageView= new MessageView($('#message-view'));
        this._messageView.update(this._message);
    }

    add(event) {
        event.preventDefault();

        //criamos uma classe e instânciarmos a mesma para invocarmos os métodos
        //mas também é possível invocar um método definido na classe diretamente, ao invés de necessariamente instânciar a classe
        //let helper = new DateHelper();

        //init
        this._dealList.add(this._createDeal()); //esse deve ser o único jeito de adicionar uma nova negociação
        this._dealView.update(this._dealList);        

        this._message.text = 'Success! Deal maked.' //logo após criar uma negociação a mensagem deve ser exibida
        this._messageView.update(this._message);
        
        this._cleanForm();
    }

    //o _ é pra deixar claro que esse método só deve ser chamado por esta classe
    _createDeal() {
        return new Deal(
            DateHelper.dateTextFormat(this._date.value),
            this._quantity.value,
            this._valuation.value
        );
    }

    _cleanForm() {
        this._date.value = '';
        this._quantity.value = 1;
        this._valuation.value = 0.0;
        this._date.focus();
    }

}