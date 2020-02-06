
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello vue.js'
    },
    methods: {
        reserveMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

// コンポーネント作る
Vue.component('todo-item', {
    props: ['todo'], // prop 
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' },
        ]
    }
})

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    }
});

const Counter = {
    template: `<div>{{ count}} </div>`,
    computed: {
        count() {
            return store.state.count;
        }
    }
}