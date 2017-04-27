/**
 * Created by bravehead on 2017/4/25.
 */
(function () {
  
  //注册
  Vue.component('my-component',{
    template: '<div>A custom component! {{text}}</div>',
    data:function () {
      return {
        text :'sb'
      }
    }
  });
  //创建根实例
  new Vue({
    el: '#example'
  });
  
  Vue.component('child',{
    //声明props
    props: ['message'],
    template: '<span>{{message+12}}</span>'
  });
  new Vue({
    el: '#example1',
    data: {
      hello: 'wocao nima'
    }
  });
  
  //绑定自定义事件
  Vue.component('button-counter',{
    template: '<button v-on:click="increment()">{{count}}</button>',
    data: function () {
      return {
        count: 0
      }
    },
    methods: {
      increment: function () {
        this.count += 1;
        this.$emit('increment');
      }
    },
  });
  
  new Vue({
    el: '#example2',
    data: {
      total:0
    },
    methods: {
      incrementTotal: function () {
        this.total += 1;
      },
      nativeFunction: function () {
        console.log("我是源生的方法");
      }
    }
  });
  
  Vue.component('child-component',{
    template: '<div v-show="someChildProperty">Child</div>',
    data(){
      return {
        someChildProperty: true
      }
    }
  });
  new Vue({
    el:'#example3',
    data: {
    
    }
  });
  
  /*单个slot*/
  Vue.component('my-component',{
    template:'<div>\
      \ <h1></h1>\
      \ <span></span>\
      </div>',
      
    data(){
      return{
      
      }
    }
  });
  
  new Vue({
    el:'#example4'
  });
 
  
})();