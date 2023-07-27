import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class DoctorsController extends Controller {
  @tracked newName;
  @tracked newStreet;
  @tracked newHousenumber;
  @tracked newPostalcode;
  @tracked newCity;
  @tracked selectedPracticeId; // Track the selected practice ID in the dropdown

  @service store;

  @action
  async createDoctor(event) {
    event.preventDefault();

    // Ensure the selectedPracticeId is set
    if (!this.selectedPracticeId) {
      console.log(this.selectedPracticeId);
      console.error('No practice selected.');
      return;
    }

    // Resolve the selected practice record using this.store.findRecord
    try {
      const selectedPractice = await this.store.findRecord('practice', this.selectedPracticeId);

      // Create a new doctor record with the selected practice
      const doctor = this.store.createRecord('doctor', {
        name: this.newName,
        street: this.newStreet,
        housenumber: this.newHousenumber,
        postalcode: this.newPostalcode,
        city: this.newCity,
        practice: selectedPractice, // Associate the resolved practice record
      });

      await doctor.save();

      this.clearForm();
    } catch (error) {
      console.error('Error creating doctor:', error);
    }
  }

  clearForm() {
    this.newName = '';
    this.newStreet = '';
    this.newHousenumber = 0;
    this.newPostalcode = 0;
    this.newCity = '';
    this.selectedPracticeId = ''; // Clear the selected practice ID
  }
}
