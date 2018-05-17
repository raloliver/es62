class Message {

    //com o ES2015 é possível definir valores padrão para argumentos (parâmetros) de construtores, métodos ou funções.
    constructor(message='') {

        this._text = message;
    }

    get text() {

        return this._text;
    }

    set text(message) {
        
        this._text = message;
    }
}