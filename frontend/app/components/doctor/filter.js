import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FilterComponent extends Component {
  quee = ''; // This is the property that will hold the input value

  @action
  async toggleSize(event) {
    this.quee = event.target.value;
    console.log('Dit is je quee', this.quee);
    let response = await fetch(`http://localhost:5000/doctors/${this.quee}`);
    console.log('Dit is je response vanuit de', response);
  }
}
