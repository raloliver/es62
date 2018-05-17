//trabalhando o conceito de herança no javascript
class MessageView extends View {

    //mesmo sem utilizer o constructor funcionou, mas não sei se por padrão pode utilizar sem.
    constructor(element) {
        
        super(element);
    }

    template(model) {
        //condicional ternário para exibir ou não a mensagem
        return model.text ? `<p class="alert alert-success"><strong>${model.text}</strong></p>` : '<p></p>';
    }

}