/**
 * Created by bravehead on 2017/5/20.
 */

var vm = new Vue({
  el:'#app',
  data: {
    arr: ['aaa', 'bbb', 'ccc'],
    obj :{
      a : 1,
      b : 2,
      c :3
    }
  }
});
//直接在vm.arr后面设置，页面是不会响应更新的
vm.arr[1] = 'ddd';
vm.obj['a'] = '2222';
//下面的几种方式可以用来解决，也可以用数组的方法来更新
Vue.set(vm.arr, 3, 'ddd');
Vue.set(vm.obj, 'b', 1000);

vm.$set(vm.obj, 'c', 2000);

//
vm.obj = Object.assign({a:1, b:2, c:3}, this.obj, {d: 3000, e: 4000});


var vm1 = new Vue({
  el:'#app1',
  data: {
    message: 'not updata'
  }
});

vm1.message = 'updata';  //更改数据

console.log(vm1.$el.textContent);
vm1.$nextTick(function () {
  console.log(vm1.$el.textContent);
});

Vue.component('example',{
  template: '<span>{{message}}</span>',
  data: function () {
    return {
      message: 'not updata'
    }
  },
  methods: {
    updateMessage: function () {
      this.message = 'new message';
      console.log(this.$el.textContent);
      this.$nextTick(function () {
        console.log(this.$el.textContent);
      });
    }
  }
});

var vm2 = new Vue({
  el: '#app2',
  data: {
    message : ''
  }
});

