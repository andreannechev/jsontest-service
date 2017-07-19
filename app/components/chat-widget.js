import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service('ajax'),
  actions: {
    sendRequest() {
      return this.get('ajax').request('query', {
        host: 'https://api.api.ai',
        namespace: 'v1',
        contentType: 'application/json; charset=utf-8',
        headers : {"Authorization": 'Bearer 0f46317926264d0eb3d0eaf804b6831d'},
        method: 'POST',
        data: {query: "lets go", lang: "en", sessionId: "somerandomthing"},
        success: function(data) {
          // var payload = JSON.stringify(data, undefined, 2);
          let spokenResponse = data.result.speech
          console.log(spokenResponse);

        }

      });
    }
  }
});