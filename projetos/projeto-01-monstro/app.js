new Vue({
    el: '#app',
    data:{
    vida: '100',
    corcritico:'red',
    novojogo:false,
    vitoria:false,
    result:false,
    atackplayer:[],
    atackmonstro:[],
    lifemonstro:100,
    lifejogador:100,
    logs:false
    },
    computed:{
        hasResult(){
            return this.lifejogador == 0 || this.lifemonstro ==0
        }
    },
    methods:{
        iniciar(){
            this.novojogo = true;
            this.logs = true;
        },
        desistir(){
            this.novojogo = false;
            this.logs = false;
        },
        atack(){
            this.atackplayer.push((Math.random() * 10))
            this.atackmonstro.push((Math.random() * 11))
            
        }
    }
   
})