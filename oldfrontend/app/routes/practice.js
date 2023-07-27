import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class PracticeRoute extends Route {
  @service store;

  async model() {
    return this.store.findRecord('practice', params.practice_id);
  }
}
