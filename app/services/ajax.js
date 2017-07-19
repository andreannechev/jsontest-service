import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  myPayload: null,

  setPayload(payload) {
    this.set('myPayload', payload);
  },

  // Method to call ajax
  sendRequest(userQuery){
      return this.request('query', {
      host: 'https://api.api.ai',
      namespace: 'v1',
      contentType: 'application/json; charset=utf-8',
      headers : {"Authorization": 'Bearer 0f46317926264d0eb3d0eaf804b6831d'},
      method: 'POST',
      data: {query: userQuery, lang: "en", sessionId: "somerandomthing"},
      success: function(data) {
        // var payload = JSON.stringify(data, undefined, 2);
        // let spokenResponse = data.result.speech
        // console.log(spokenResponse);

      }

    });
  }


  // getPayload(){
  //   return this.get('myPayload');
  // }


});
