import Model, { attr, hasMany } from '@ember-data/model';

export default class PracticeModel extends Model {
  @attr('string') name;
  @attr('string') street;
  @attr('number') housenumber;
  @attr('number') postalcode;
  @attr('string') city;
  @attr('string') type;
  @hasMany('doctor', { async: true, inverse: 'practice' }) doctors;
}
