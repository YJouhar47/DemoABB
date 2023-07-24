import Model, { attr } from '@ember-data/model';

export default class DoctorModel extends Model {
  @attr recordid;
  @attr naam;
  @attr postcode;
  @attr huisnr;
  @attr type;
  @attr straat;
  @attr gemeente;
  @attr geometry;
}