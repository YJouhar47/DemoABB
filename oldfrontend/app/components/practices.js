import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PracticesComponent extends Component {
  @service store;
  @tracked practice;
  
  @action
  removePractice(practice, event) {
    event.preventDefault();
    practice.destroyRecord();
  }
}
