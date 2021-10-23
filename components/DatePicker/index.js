import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';

export class CustomDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1900-05-01"
        maxDate="2021-12-30"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            display: 'none',
          },
          dateInput: {
            borderWidth: 0,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={date => {
          this.setState({date: date});
        }}
      />
    );
  }
}
