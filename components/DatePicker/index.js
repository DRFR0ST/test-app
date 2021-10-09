import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';

export class CustomDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {date: '2021-05-15'};
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
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
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
