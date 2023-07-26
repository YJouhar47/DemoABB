import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DoctorsComponent extends Component {
  @service store;
  @tracked doctor;
  
  @action
  removeDoctor(doctor, event) {
    event.preventDefault();
    doctor.destroyRecord();
  }
}
