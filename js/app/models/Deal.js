//iniciando o arquivo com letra Maiúscula pra especificar que aqui teremos uma classe

class Deal {
    //aqui definimos os atributos de uma classe
    //ele é um espécie de função, também podemos usar argumentos para as propriedades
    constructor(date, quantity, valuation) {
        //o this serve para, ao usar o operador new, o mesmo ser correspondente a instância
        //utilizaremos o _ para explicitá que as propriedades só podem ser alteradas pelos próprios métodos da classe
        this._date = new Date(date.getTime());
        //por conta da data ser um objeto (deep) ele não se torna imutável, e pode ser alterado.
        this._quantity = quantity;
        this._valuation = valuation;
        //até este momento, está classe é anêmica, tem apenas dados e não tem comportamentos

        //não altere essa bagaça, aqui só pode gravar com o constructor :P
        Object.freeze(this);
    }

    //agora sim, teremos os métodos (função dentro de classe é método, fora é apenas função)
    //OO: conexão entre dados e comportamentos

    //aqui iremos alterar para getter do ES2015, métodos apenas de leitura
    //esse é um método com cara de propriedade que chama um método por debaixo dos panos
    get volume() {
        return this._quantity * this._valuation;
    }

    get date() {
        //esse tipo de programação é conhecida como programação defensiva
        return new Date(this._date.getTime());
    }

    get quantity() {
        return this._quantity;
    }

    get valuation() {
        return this._valuation;
    }
}