const app = Vue.createApp({
    data() {
        return {
            users: [
                {
                    id: "john",
                    name: "John Doe",
                    phone: "+1 23 456 7890",
                    email: "jhon.doe@domen.net"
                },
                {
                    id: "coala",
                    name: "Coala Moala",
                    phone: "+2 34 567 8901",
                    email: "coala.moala@web.net"
                }
            ]
        }
    }
});

app.component('user-contact', {
    template: `
        <li>
          <h2>{{ user.name }}</h2>
          <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ user.phone }}</li>
            <li><strong>Email:</strong> {{ user.email }}</li>
          </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            user: {
                id: "john",
                name: "John Doe",
                phone: "+1 23 456 7890",
                email: "jhon.doe@domen.net"
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = ! this.detailsAreVisible;
        }
    }
});

app.mount('#app');