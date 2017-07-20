import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  myPayload: null,

  setPayload(payload) {
    this.set('myPayload', payload);
  },

  // Return JSON form API.ai as Promise
  sendRequest(userQuery){
      // Will be call from chat widget
      return this.request('query', {
        host: 'https://api.api.ai',
        namespace: 'v1',
        contentType: 'application/json; charset=utf-8',
        headers : {"Authorization": 'Bearer 0f46317926264d0eb3d0eaf804b6831d'},
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

  isDashboard: false,

  setDashboard(state){
    this.set('isDashboard', state);
  }

});
