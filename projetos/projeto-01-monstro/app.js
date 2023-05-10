new Vue({
    el: '#app',
    data:{
    vida: '100',
    corcritico:'red',
    novojogo:false,
    vitoria:false,
    result:false,
    lifemonstro:100,
    lifejogador:100,
    logs:[]
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
            this.lifemonstro=100;
            this.lifejogador=100;
            this.logs = [];
        },
        desistir(){
            this.novojogo = false;
            this.logs = [];
            this.lifemonstro=100;
            this.lifejogador=100;
        },
        atack(especial){
            this.hurt('lifejogador',7,12,false,'Jogador','Monstro','player');
            if(this.lifemonstro > 0){
                this.hurt('lifemonstro',5,10,especial,'Monstro','Player','monster');
            }
        },
        hurt(atr,min,max,especial, source , targer, cls){
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus);
            this[atr] = Math.max(this[atr] - hurt, 0);
            this.registerLog(`${source} atingiu ${targer} com ${hurt}.`,cls);
        },
        getRandom(min,max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        healAndHurt(){
            this.heal(10,15);
            this.hurt('lifejogador',7,12,false,'monstro','Jogador','monster');
        },
        heal(min,max){
            const heal = this.getRandom(min,max)
            this.lifejogador = Math.min(this.lifejogador + heal,100);
            this.registerLog(`Jogador Curou-se com ${heal}.`,'player');
        },
        registerLog(text,cls){
            this.logs.unshift({text, cls })
        }
    },
    watch:{
        hasResult(value){
            if(value) this.novojogo = false;
        }

    }
   
})