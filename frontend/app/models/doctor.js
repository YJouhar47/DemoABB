import Model, { attr , belongsTo} from '@ember-data/model';

export default class DoctorModel extends Model {
  @attr('string') name;
  @attr('string') street;
  @attr('number') housenumber;
  @attr('number') postalcode;
  @attr('string') city;
  @belongsTo('practice') practice;
}
