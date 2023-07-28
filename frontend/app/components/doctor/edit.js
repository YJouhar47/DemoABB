import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class DoctorComponent extends Component {
  @service store;
  @service router;

  @tracked practices;
  @tracked newPractice;

  constructor() {
    super(...arguments);
  }

  async init() {
    super.init();

    try {
        this.practices = await this.store.findAll('practice');
        console.log(this.practices)
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
  async editDoctor(doctor, event) {
    event.preventDefault();
    await doctor.save();
    doctor.practice = this.existingPractice;
    await doctor.save();
    this.router.transitionTo('/');
  }
}

