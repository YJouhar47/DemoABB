import Component from '@glimmer/component';

export default class DoctorsFilterComponent extends Component {
  get results() {
    let { doctors, query } = this.args;

    if (query) {
      doctors =
        doctors.filter(
          (doctor) =>
            doctor.name.includes(query) || doctor.postalcode.includes(query) ||
            doctor.city.includes(query) || doctor.lastname.includes(query)
        ) 
    }
    return doctors;
  }
}