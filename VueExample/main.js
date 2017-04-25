/**
 * Created by bravehead on 2017/4/24.
 */
(function () {

  let app1 = new Vue({
    el:'.app1',
    methods: {
      warn: function (message, event) {
        if(event) event.preventDefault();
        alert(message);
        console.log(event.target);
      }
    }
  });
  
  let app2 = new Vue({
    el:'.app2',
    data: {
      checkedNames:[]
    }
  });

})();