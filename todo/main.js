Vue.component('todo-item',{
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: '<div>' +
  '<input type="checkbox" v-model="todo.completed">' +
  '<span>{{ todo.text }}</span>' +
  '<button type="button" v-on:click="onClickRemove">削除</button>' +
  '</div>',

  methods: {
    onClickRemove: function(){
      this.$emit('remove')
    }
  }
});

var vm = new Vue({
  el: '#app',
  data: {
    input: '',
    todos: [
      { completed: true, text: 'テストテキスト' },
      { completed: false, text: 'テストテキスト' }
    ]
  },
  methods: {
    addTodo: function(){
      this.todos.push({
        completed: false,
        text: this.input
      })
      this.input = ''
    }
  },
});