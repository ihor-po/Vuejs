const app = Vue.createApp({
    data() {
        return {
            addFirstNumber: 5,
            addSecondNumber: 1,
            number: 0
        }
    },
    watch: {
        number(value, oldValue) {
            const that = this;
            
            setTimeout(function () {
                that.number = 0;
            }, 5000);
        }
    },
    computed: {
        result() {
            if (this.number > 37) {
                alert("Too much!")
            }
            
            if (this.number < 37 && this.number !== 0) {
                alert('Not there yet')
            }
            return this.number
        }
    },
    methods: {
        calculate(addNumber) {
            this.number += addNumber;
        }
    }
});

app.mount('#assignment');