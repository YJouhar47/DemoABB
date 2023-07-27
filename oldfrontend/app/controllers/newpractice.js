import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PracticeController extends Controller {
  @tracked newPractice;
  @tracked newStreet;
  @tracked newHousenumber;
  @tracked newPostalcode;
  @tracked newCity;
  @tracked newType;

  @service store;

  @action
  createPractice(event) {
    event.preventDefault();

    const practice = this.store.createRecord('practice', {
      practice: this.newPractice,
      street: this.newStreet,
      housenumber: this.newHousenumber,
      postalcode: this.newPostalcode,
      city: this.newCity,
      type: this.newType,
    });
    practice.save();

    this.clearForm();
  }
  clearForm() {
    this.newPractice = '';
    this.newStreet = '';
    this.newHousenumber = 0;
    this.newPostalcode = 0;
    this.newCity = '';
    this.newType = '';
  }
}