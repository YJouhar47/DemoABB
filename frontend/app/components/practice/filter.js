import Component from '@glimmer/component';

export default class PracticesFilterComponent extends Component {
  get results() {
    let { practices, query } = this.args;

    if (query) {
      practices = practices.filter(
        (practice) =>
          practice.name.includes(query) ||
          practice.postalcode.includes(query) ||
          practice.city.includes(query) ||
          practice.type.includes(query)
      );
    }

    console.log('Dit zijn je praktijken :', practices);

    return practices;
  }
}
