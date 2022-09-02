class NegociacaoControle{
    constructor() {
        let $ = document.querySelector.bind(document);
        this.inputData = $ ('#data')
        this.inputQuaqtidade =  $ ('#quantidade')
        this.inputvalor =  $ ('#valor')

    }

    adcionar(evento){
        evento.preventDefault();


        console.log(this.inputvalor.value);
        console.log(this.inputQuaqtidade.value);
        console.log(this.inputData.value);

    }
}