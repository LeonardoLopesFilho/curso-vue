new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        mostrar(){
            alert('testee')
        },
        input1(event){
            this.valor = event.target.value
        }
    }
})