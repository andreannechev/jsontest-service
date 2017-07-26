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

        // // Set Dashboard to true
        // if (data.result.action === 'showDashboard'){
        //   ajax.setDashboard(true);
        // } else ajax.setDashboard(false);

        switch (data.result.action) {
          case 'chooseStart':
            ajax.setStart(true);
            break;
          case 'showDashboard':
            ajax.setDashboard(true);
            break;
            case 'newProject':
            ajax.setNewProject(true);
              break;
            case 'defineBrandName':
            ajax.setBrandName(true);
              break;
            case 'defineProjectType':
            ajax.setProjectType(true);
              break;
            case 'startBrief':
            setStartBrief.setProjectType(true);
              if(!data.result.parameters.elements === '') {

              }
                // switch (data.result.parameters) {
                //   case expression:
                //     break;
                //   default:
                // }
              break;
          default:
            // ajax.setStart(false);
            ajax.setDashboard(false);
            ajax.setNewProject(false);
            ajax.ProjectType(false);
            ajax.BrandName(false);
          break;

        }




      }); //end .then

      // Cleat user input
      this.setProperties({
        userQuery: ''
      });

    }, //end action setThePayload()

  }
});
