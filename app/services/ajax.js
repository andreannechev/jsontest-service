import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  store: Ember.inject.service(),

  myPayload: null,

  setPayload(payload) {
    this.set('myPayload', payload);
  },

  // Save Brand name in model
  saveBrandName() {
    let store = Ember.get(this, 'store');
    let brand = this.get('myPayload').result.parameters.brandname;
    let newBrand = store.createRecord('brand', {
      brandName: brand,
    });
    console.log(this.get('myPayload').result.action);
  },
  // savedBrandName: null,
  // setsavedBrandName(val) {
  //
  //   this.set('myPayload', val);
  // },



  // Return JSON form API.ai as Promise
  sendRequest(userQuery){
      // Will be call from chat widget
      return this.request('query', {
        host: 'https://api.api.ai',
        namespace: 'v1',
        contentType: 'application/json; charset=utf-8',
        headers : {"Authorization": 'Bearer 3fd2619abbf243f6b38dcc29dd5aa012'},
        method: 'POST',
        data: {query: userQuery, lang: "en", sessionId: "somerandomthing"},
        success: function(data) {
          }
      })

      // after become results
      // .then(function (data) {
      //
      //   });
  },

  isActive: {
    Start: false,
    Dashboard: false,
    NewProject: false,
    BrandName: false,
    ProjectType: false,
    StartBrief: false,
    Specifications: false
  },
    // "parameters": {
    //   "elements": "images",
    //   "problem": "",
    //   "target": "",
    //   "voice": ""}



  // Set State of the cards
  setStart(state){
    this.set('isActive.Start', state);
  },
  setDashboard(state){
    this.set('isActive.Dashboard', state);
  },
  setNewProject(state){
    this.set('isActive.NewProject', state);
  },
  setBrandName(state){
    this.set('isActive.BrandName', state);
  },
  setProjectType(state){
    this.set('isActive.ProjectType', state);
  },
  setStartBrief(state){
    this.set('isActive.StartBrief', state);
  },


});
