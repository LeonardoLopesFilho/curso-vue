<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario <strong> {{ inverterNome() }}</strong></p>
        <p>Idade do usuario {{ idade }}</p>
        <button @click="reiniciarNome()">Reiniciar Nome</button>
        <button @click="reiniciarFN()">Reiniciar CallBack</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props:{
        nome:{
            type:String,
            // required:true
            // default:function(){
                //     return Array(10).fill(0).join(',')
                // }
            default:'Anonimo'
        },
        reiniciarFN: Function,
        idade:Number
    },
    methods:{
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = 'Pedro'
            this.$emit('nomeMudou',this.nome)
        }
    },
    created(){
        barramento.quandoMudar(idade =>{
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
