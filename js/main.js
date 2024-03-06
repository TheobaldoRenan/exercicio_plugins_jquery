$(document).ready(function() {

$('#tel').mask('(00) 0.0000-0000')
$('#cpf').mask('000.000.000-00')
$('#cep').mask('00.000-000')

$('form').validate({
    rules:{
        nome:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        tel:{
            required: true
        },
        cpf: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        }
    },
    messages:{
        nome: 'Por favor, Insira o seu nome.',
        email: 'Por favor, Insira o seu e-mail.',
        tel: 'Por favor, Insira o seu telefone.',
        cpf: 'Por favor, Insira o seu CPF.',
        endereco: 'Por favor, Insira o seu endereço.',
        cep: 'Por favor, Insira o seu CEP.'
    },
    submitHandler: function(form){
        console.log(form)
    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos !`)
        }
    }
})
})

