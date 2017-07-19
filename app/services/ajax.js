import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  myPayload: null,

  setPayload(payload) {
    this.set('myPayload', payload);
  },

  // getPayload(){
  //   return this.get('myPayload');
  // }


});
