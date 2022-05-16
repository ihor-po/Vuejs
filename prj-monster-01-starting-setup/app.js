// Get random number from min to max
const getRandomFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            specialAttackCounter: 0,
            winner: null,
            logs: []
        };
    },
    watch: {
        specialAttackCounter(value) {
            this.specialAttackCounter = value > 3 ? 3 : value;
        },
        playerHealth(value) {
            if (value <=0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value < 0) {
                this.winner = 'monster'
            }

            this.playerHealth = value < 0 ? 0 : value;
        },
        monsterHealth(value) {
            if (value <=0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value < 0) {
                this.winner = 'player'
            }

            this.monsterHealth = value < 0 ? 0 : value;
        }
    },
    computed: {
        monsterBarStyles() {
            return {
                width: this.monsterHealth + '%'
            };
        },
        playerBarStyles() {
            return {
                width: this.playerHealth + '%'
            };
        },
        enableSpacialAttack() {
            return !(this.specialAttackCounter !== 0 
            && this.specialAttackCounter % 3 === 0
            && this.playerHealth > 0);
        },
        disableHealPlayer() {
            return this.playerHealth === 0 || this.playerHealth > 50;
        }
    },
    methods: {
        attackMonster() {
            this.specialAttackCounter++;
             const attackValue = getRandomFunction(5, 12);
             this.monsterHealth -= attackValue;
             this.addLogMessage('player', 'attack', attackValue);
             this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomFunction(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
       },
       specialAttackMonster() {
            this.specialAttackCounter = 0;

            const attackValue = getRandomFunction(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'special_attack', attackValue);
            this.attackPlayer();
       },
       healPlayer() {
            const healValue = getRandomFunction(8, 15) * 2;
            const newPlayerHealth = this.playerHealth + healValue;

            this.playerHealth = newPlayerHealth > 100 
            ? 100 
            : newPlayerHealth;

            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
       },
       newGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.specialAttackCounter = 0;
            this.winner = null;
            this.logs = [];
       },
       surrender() {
            this.winner = 'monster';
       },
       addLogMessage(who, what, value) {
            this.logs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
       }
    }
});

app.mount('#game');