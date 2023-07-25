import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class DoctorController extends Controller {
  @tracked newNaam = '';
  @tracked newStraat = '';
//   @tracked postcode;
//   @tracked huisnr;

  @service store;

  @action
  createDoctor(event) {
    event.preventDefault();

    const doctor = this.store.createRecord('doctor', {
      naam: this.newNaam,
      straat: this.newStraat,
      //   postcode: this.postcode,
      //   huisnr: this.huisnr,
    });
    doctor.save();

    this.newNaam = '';
    this.newStraat = '';
  }

}
