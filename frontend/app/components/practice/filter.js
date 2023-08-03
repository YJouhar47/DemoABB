import Component from '@glimmer/component';

export default class DoctorsFilterComponent extends Component {
  get results() {
    let { practices, query1 } = this.args;

    if (query1) {
      practices =
        practices.filter(
          (practice) =>
            practice.name.includes(query1) || practice.postalcode.includes(query1)
        ) || practice.city.includes(query1);
    }
    return practices;
  }
}
