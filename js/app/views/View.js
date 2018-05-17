class View {

    constructor(element) {

        this._element = element;
    }

    //criação do método _template apenas para programar de maneira defensiva
    template() {

        throw new Error('Por favor, implemente o método em seu template.');
    }

    update(model) {

        this._element.innerHTML = this.template(model);
    }
}