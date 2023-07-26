import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PraktijkController extends Controller {
  @tracked newPraktijk;
  @tracked newStraat;
  @tracked newHuisnr;
  @tracked newPostcode;
  @tracked newGemeente;
  @tracked newType;

  @service store;

  @action
  createPraktijken(event) {
    event.preventDefault();

    const doctor = this.store.createRecord('praktijken', {
      praktijk: this.newPraktijk,
      straat: this.newStraat,
      huisnr: this.newHuisnr,
      postcode: this.newPostcode,
      gemeente: this.newGemeente,
      type: this.newType,
    });
    doctor.save();

    this.clearForm();
  }
  clearForm() {
    this.newPraktijk = '';
    this.newStraat = '';
    this.newHuisnr = 0;
    this.newPostcode = 0;
    this.newGemeente = '';
    this.newType = '';
  }
}