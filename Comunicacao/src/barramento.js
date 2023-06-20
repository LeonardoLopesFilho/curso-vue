import Vue from 'vue'
export default new Vue({
    alterarIdade(idade){
        this.$emit('idadeMudou',idade)
    },
    quandoMudar(callback){
        this.$on('idadeMudou',callback)
    }
})