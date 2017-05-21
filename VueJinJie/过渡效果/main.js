/**
 * Created by bravehead on 2017/5/20.
 */

(function () {
  
  
  new Vue({
    el: '#example-1',
    data: {
      show: true
    }
  });
  
  new Vue({
    el: '#example-2',
    data: {
      show: true
    }
  });
  
  
  new Vue({
    el: '#example-4',
    data: {
      show: false
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.transformOrigin = 'left'
      },
      enter: function (el, done) {
        Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
        Velocity(el, { fontSize: '1em' }, { complete: done })
      },
      leave: function (el, done) {
        Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
        Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        }, { complete: done })
      }
    }
  });
  
  new Vue({
    el: '#example-3',
    data: {
      view: 'v-a',
      name: ''
    },
    components: {
      'v-a': {
        template: '<div>Component A</div>'
      },
      'v-b': {
        template: '<div>Component B</div>'
      }
    },
    methods:{
      clickVal: function () {
        this.view = this.name;
        console.log(this.view, this.name);
      }
    }
  })
  
  new Vue({
    el:'#example-5',
    data: {
      arr:[1,2,3,4,5,6,7,8,9],
      nextNumber: 10,
    },
    methods: {
      randomIndex: function () {
        return Math.floor(Math.random()*(this.arr.length));
      },
      add: function () {
        this.arr.splice(this.randomIndex(), 0, this.nextNumber++);
      },
      remove: function () {
        this.arr.splice(this.randomIndex(), 1);
      },
      shuffle: function () {
        this.arr = _.shuffle(this.arr);
      }
    }
  });
  
  
  new Vue({
    el:'#staggered-list-demo',
    data: {
      query: '',
      list: [
        {msg: 'A'},
        {msg: 'B'},
        {msg: 'C'},
        {msg: 'D'},
        {msg: 'E'},
        {msg: 'F'}
      ]
    },
    computed: {
      computedList: function (item) {
        var vm = this;
        return this.list.filter(function (item) {
          return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
        })
      }
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0;
        el.style.height= 0;
      },
      enter: function (el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
            el,
            { opacity: 1, height: '1.6em' },
            { complete: done }
          )
        }, delay)
      },
      leave: function (el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
            el,
            { opacity: 0, height: 0 },
            { complete: done }
          )
        }, delay)
      }
    }
  });
  
})();