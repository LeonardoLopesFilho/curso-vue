new Vue({
    el:'#desafio',
    data:{
        nome:'Leonardo',
        idade:21,
        img:'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc1ad7d6e760c5f33/63ec0e45041b675c4c358894/DSCF2393-2.jpg'
    },
    methods:{
        multiplicaidade(){
            return (this.idade*3)
        },
        numerorandom(){
            return Math.random()
        },

    }
})