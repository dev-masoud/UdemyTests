<template>
 <div id="app">
    <section class="row">
        <div class="small-6 columns">
            <h1 class="text-center">YOU</h1>
            <div class="healthbar">
                <div class="healthbar text-center"
                 style="background-color: green; margin: 0; color: white;"
                 :style="{width : playerHealth + '%'}"
                 >
                        {{playerHealth}}
                </div>
            </div>
        </div>
        <div class="small-6 columns">
            <h1 class="text-center">MONSTER</h1>
            <div class="healthbar">
                <div class="healthbar text-center" 
                style="background-color: green; margin: 0; color: white;"
                 :style="{width : monsterHealth + '%'}"
                
                >
                        {{monsterHealth}}
                </div>
            </div>
        </div>
    </section>
    <section class="row controls" v-if="play">
        <div class="small-12 columns">
            <button id="start-game" @click="start">START NEW GAME</button>
        </div>
    </section>
    <section class="row controls" v-else>
        <div class="small-12 columns">
            <button id="attack" @click="attack">ATTACK</button>
            <button id="special-attack" @click="specialAttack">SPECIAL ATTACK</button>
            <button id="heal" @click="heal">HEAL</button>
            <button id="give-up" @click="giveUp">GIVE UP</button>  
        </div>
    </section>
    <section class="row log" v-if="turns.length>0">
        <div class="small-12 columns">
            <ul>
                <li v-for="turn in turns" :key="turn"
                :class="{'player-turn': turn.isPlayer , 'monster-turn' : !turn.isPlayer}">
                    {{turn.text}}
                </li>
            </ul>
        </div>
    </section>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      play:true,

    playerHealth :100,
    monsterHealth:100,

    turns:[]
    }
  },
  methods:{
    start(){
        this.playerHealth =100;
        this.monsterHealth=100;
        this.play= false;
        this.turns=[]
    },


    attack(){
        let damage = this.calculateDamage(3,10);
        this.monsterHealth -= damage
            
            this.turns.unshift({
                isPlayer:true,
                text: 'Player hits Monster for '+damage
            })

            if(this.checkwin()){
                return;
            }


        this.monsterAttack()
    },

    specialAttack(){
        let damage = this.calculateDamage(7,14);
        this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer:true,
                text: 'Player hits Monster for '+damage
            })

            if(this.checkwin()){
                return;
            }


        this.monsterAttack()

    },

    heal(){
        let heal = this.calculateDamage(3,7)
        this.playerHealth += heal
        if(this.playerHealth>=100){
            this.playerHealth=100;
        }
        this.turns.unshift({
                isPlayer:true,
                text: 'Player heals for '+heal
            })
    },

    giveUp(){
        if(confirm("you gave up! new game?")){
            this.start()
        }
        else{
            this.play=false;
        }
    },


    calculateDamage(min,max){
        return Math.max(Math.floor(Math.random() * max)+1 , min)
    },

    checkwin(){
        if(this.monsterHealth <= 0){
            this.monsterHealth=0;
            if(confirm("you won! new game?")){
                this.start()
            }
            else{
                this.play=false;
            }
            return true;
            }
        else if(this.playerHealth <= 0){
            this.playerHealth=0;
            if(confirm("you lost! new game?")){
                this.start()
            }
            else{
                this.play=false;
            }
            return true;
            }
            return false;
        },

    monsterAttack(){
        let damage=this.calculateDamage(5,12);
        this.playerHealth -= damage

        this.turns.unshift({
                isPlayer:false,
                text: 'Monster hits player for '+damage
            })
        
            this.checkwin();

    }
    }
  }
  


</script>

<style>
.text-center {
    text-align: center;
}

.healthbar {
    width: 80%;
    height: 40px;
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
}

.controls, .log {
    margin-top: 30px;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
}

.turn {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 22px;
}

.log ul {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
}

.log ul li {
    margin: 5px;
}

.log ul .player-turn {
    color: blue;
    background-color: #e4e8ff;
}

.log ul .monster-turn {
    color: red;
    background-color: #ffc0c1;
}

button {
    font-size: 20px;
    background-color: #eee;
    padding: 12px;
    box-shadow: 0 1px 1px black;
    margin: 10px;
}

#start-game {
    background-color: #aaffb0;
}

#start-game:hover {
    background-color: #76ff7e;
}

#attack {
    background-color: #ff7367;
}

#attack:hover {
    background-color: #ff3f43;
}

#special-attack {
    background-color: #ffaf4f;
}

#special-attack:hover {
    background-color: #ff9a2b;
}

#heal {
    background-color: #aaffb0;
}

#heal:hover {
    background-color: #76ff7e;
}

#give-up {
    background-color: #ffffff;
}

#give-up:hover {
    background-color: #c7c7c7;
}
</style>
