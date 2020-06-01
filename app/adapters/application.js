import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.RESTAdapter.extend({
   host: 'https://pokeapi.co/api/v2',
   pathForType(type) {
    return underscore(type);
  }
})