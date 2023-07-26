import Model, { attr } from '@ember-data/model';

export default class VestigingModel extends Model {
  @attr('string') praktijk;
  @attr('string') straat;
  @attr('number') huisnr;
  @attr('number') postcode;
  @attr('string') gemeente;
  @attr('string') type;
}