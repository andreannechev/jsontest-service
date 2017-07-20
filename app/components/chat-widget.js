import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service('ajax'),
  actions: {
    setThePayload(){
      // Fetch User input
      let userQuery = this.get('userQuery');

      //AXAJ call to the Service
      let ajax = Ember.get(this, 'ajax');
        ajax.sendRequest(userQuery)
      .then(function(data){
        ajax.setPayload(data);
        console.log(ajax.myPayload);

        // Set Dashboard to true
        if (data.result.action === 'showDashboard'){
          ajax.setDashboard(true);
        } else ajax.setDashboard(false);


      }); //end .then

      // Cleat user input
      this.setProperties({
        userQuery: ''
      });

    }, //end action setThePayload()

  }
});
