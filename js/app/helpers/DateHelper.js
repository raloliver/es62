class DateHelper {
    //definição do constructor apenas para alertar que não é necessário instanciar a classe
    constructor() {
        //a maioria das classes que existem hoje no JS, ñ são classe, mas sim funções construtoras.
        //conceito de fail-fast
        throw new Error('Não é necessário instanciar esta classe.');
    }
    //por padrão é criado um constructor vazio nessa aqui.
    //como ñ foi definido um constructor, eu ñ insiro propriedades nessa classe
    /**
     * ao usar o static, você invoca o método diretamente, mas sem instanciar a classe
     */
    static dateTextFormat(string) {
        /**
         * validação de data caso o formato inserido seja incorreto
         */
        if (!/\d{4}-\d{2}-\d{2}/.test(string)) {
            //conceito de fail-fast
            throw new Error('Formato inválido! Insira o formato correto: yyyy-mm-dd');
        } 
        return new Date(...string.split('-').map((item, index) => item - index % 2));
    }

    static dateDefaultFormat(format) {
        //com o uso dos templates strings ficou mais fácil `concatenar` os dados.
        //return format.getDate() + '/' + (format.getMonth() + 1) + '/' + format.getFullYear();
        return `${format.getDate()}/${format.getMonth()+1}/${format.getFullYear()}`;
        //posso inserir diretamente o +1 pois o template string vai executar individualmente cada interpolação.             
    }
}