import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class DoctorController extends Controller {
  @tracked newNaam;
  @tracked newStraat;
  @tracked newHuisnr;
  @tracked newPostcode;
  @tracked newGemeente;
  @tracked newType;
  @tracked isEditing = false;
  @tracked doctorToUpdate = null;

  @service store;

  @action
  createDoctor(event) {
    event.preventDefault();

    const doctor = this.store.createRecord('doctor', {
      naam: this.newNaam,
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
    this.newNaam = '';
    this.newStraat = '';
    this.newHuisnr = 0;
    this.newPostcode = 0;
    this.newGemeente = '';
    this.newType = '';
  }
}