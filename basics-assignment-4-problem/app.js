const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            hideParagraph: false,
            userStyle: ''
        };
    },
    computed: {
        inlineStyles() {
            return {
                backgroundColor: this.userStyle
            };
        }
    },
    methods: {
        setClass(event) {
            const className = event.target.value;

            this.inputClass = className !== 'user1' && className !== 'user2' ? '' : className;
        },
        hide() {
            console.log(this.hideParagraph);
            this.hideParagraph = !this.hideParagraph;
        }
    }
});

app.mount('#assignment');