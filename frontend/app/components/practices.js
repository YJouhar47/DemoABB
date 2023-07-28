import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PracticesComponent extends Component {
  @service store;
  @tracked practice;
  @action
  async removePractice() {
    const practiceArgument = this.args.practice
    let practice = this.store.peekRecord('practice', practiceArgument.id)
    console.log({practice});
    try {
      practice.destroyRecord();
    }
    catch (error) {
      throw {
        message: `Something went wrong while deleting practice with id : ${practiceArgument.id}`
      }
    }
  }
}