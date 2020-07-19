var vm = new Vue({
  el: '#app',
  data: {
    items: [
      'HTML',
      'CSS',
      'JavaScript'
    ],
    input: ''
  },
  methods: {
    addItem: function(item){
      this.items.push(item)
    }
  }
});