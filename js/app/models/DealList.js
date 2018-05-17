class DealList {
    //num array comum é possível adicionar, remover, editar itens, no caso deste exemplo, isso ñ será possível, apenas adicionar itens será possível
    constructor() {
        this._deals = [];
    }

    add(deal) {
        this._deals.push(deal);
    }

    get deals() {
        //programação defensiva: através do [].concat um novo obj é criado na memória e esse é o que será devolvido
        //com outros métodos (ex: push) é possível adicionar itens, mas numa copia e ñ na original
        return [].concat(this._deals);
    }
}