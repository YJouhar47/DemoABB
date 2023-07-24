import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ExpenseController extends Controller {
  @tracked id;
  @tracked type;
  @tracked naam;
  @tracked gemeente;
  @tracked huisnr;
  @tracked straat;
  @tracked postcode;
  @tracked lat;
  @tracked lng;


  @service store

  @action
  createExpense(event) {
    event.preventDefault();

    if (this.naam === "") return;

    const doctor = this.store.createRecord('doctor', {
      id: this.id,
      type: this.type,
      naam: this.naam,
      gemeente: this.gemeente,
      huisnr: this.huisnr,
      straat: this.postcode,
      lat: this.lat,
      lng: this.lng
    });
    doctor.save();
  }

  @action
  removeExpense(doctor, event) {
    event.preventDefault();
    doctor.destroyRecord();
  }
}