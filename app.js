var app = new Vue({
    el: "#app",
    data: {
        name: "Carlos Vasquez",
        health: 100,
        ended: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 }
        ]
    },
    methods: {
        punch: function () {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {

    }
})