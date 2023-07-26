import Model, { attr } from '@ember-data/model';

export default class DoctorModel extends Model {
  @attr('string') naam;
  @attr('string') straat;
  @attr('number') huisnr;
  @attr('number') postcode;
  @attr('string') gemeente;
  @attr('string') praktijk;
}
