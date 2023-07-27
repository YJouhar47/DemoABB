import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DoctorComponent extends Component {
  @service store;
  @service router;
  @action
  editDoctor(doctor, event) {
    event.preventDefault();
    doctor.save();
    this.router.transitionTo('/');
  }
}
