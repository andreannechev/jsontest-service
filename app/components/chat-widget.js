import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service('ajax'),
  actions: {
    setThePayload(){
      // Fetch User input
      let userQuery = this.get('userQuery');
      console.log(userQuery);


      //AXAJ call to the Service
      let ajax = Ember.get(this, 'ajax');
      // ajax.setPayload('here is the new payload');
      // console.log(ajax.myPayload);

      let test = ajax.sendRequest(userQuery)
      .then(function(data){
        ajax.setPayload(data.result.speech);
        console.log(ajax.myPayload);
      });

      // Cleat user input
      this.setProperties({
        userQuery: ''
      });

     },

  }
});
