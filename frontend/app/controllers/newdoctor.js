import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { expandProperties } from '@ember/object/computed';

export default class DoctorsController extends Controller {
  @tracked newName;
  @tracked newStreet;
  @tracked newHousenumber;
  @tracked newPostalcode;
  @tracked newCity;
  @tracked practices;
  @tracked newPractice;

  @service store;

  constructor() {
    super(...arguments);
  }

  async init() {
    super.init();

    try {
        this.practices = await this.store.findAll('practice');
    }
    catch (error) {
        console.log('Error fetching practices : ', error)
    }
  }

  @action
  async selectPractice(event) {
    const selectedPracticeId = event.target.value;
    this.existingPractice = await this.store.findRecord('practice', selectedPracticeId)
  }

  @action
  async createDoctor(event) {
    event.preventDefault();

      const doctor = this.store.createRecord('doctor', {
        name: this.newName,
        street: this.newStreet,
        housenumber: this.newHousenumber,
        postalcode: this.newPostalcode,
        city: this.newCity,
      });
      await doctor.save();
      doctor.practice = this.existingPractice;
      await doctor.save();
      this.clearForm();
  }



  clearForm() {
    this.newName = '';
    this.newStreet = '';
    this.newHousenumber = 0;
    this.newPostalcode = 0;
    this.newCity = '';
  }
}
