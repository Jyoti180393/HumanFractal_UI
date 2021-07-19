import { Injectable } from '@angular/core';

@Injectable()
export class TimepickerService {
  day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thrusday',
    'Friday',
    'Saturday'
  ];
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  dates = {
    slots: [
      {
        date: '06-April-2021',
        timeSlots: ['09:00', '09:30', '10:00', '18:00', '19:00']
      },
      {
        date: '07-April-2021',
        timeSlots: ['10:00', '11:30', '17:00', '18:00', '19:00']
      },
      {
        date: '10-May-2021',
        timeSlots: ['08:00', '08:30', '10:00', '18:00', '20:00']
      },
      {
        date: '20-May-2021',
        timeSlots: ['10:15', '10:30', '17:15', '18:30', '19:45']
      },
      {
        date: '15-May-2021',
        timeSlots: ['07:10', '08:30', '12:00', '14:00', '15:00']
      },
      {
        date: '06-June-2021',
        timeSlots: ['11:15', '11:30', '13:30', '18:45', '15:00']
      },
      {
        date: '16-June-2021',
        timeSlots: ['09:00', '09:30', '10:00', '18:00', '19:00']
      },
      {
        date: '19-June-2021',
        timeSlots: ['10:15', '10:30', '17:15', '18:30', '19:45']
      },
      {
        date: '26-June-2021',
        timeSlots: ['06:00', '06:45', '09:15', '12:45', '05:45']
      },
      {
        date: '01-July-2021',
        timeSlots: ['07:20', '08:30', '12:15', '14:45', '15:30']
      },
      {
        date: '06-July-2021',
        timeSlots: ['11:20', '11:50', '13:30', '18:00', '16:30']
      },
      {
        date: '30-July-2021',
        timeSlots: ['10:00', '11:30', '17:00', '18:00', '19:00']
      }
    ]
  };
  totalDates = this.dates.slots.length;
  constructor() {}

  formatteDate(date) {
    const oldDate = new Date(date);
    let dd = oldDate.getDate().toString();
    dd = dd.length === 1 ? `0${dd}` : dd;
    let mm = (oldDate.getMonth() + 1).toString();
    mm = mm.length === 1 ? `0${mm}` : mm;
    let yyyy = oldDate.getFullYear();
    let formattedDate = `${yyyy}-${mm}-${dd}`;
    return formattedDate;
  }

  getTodayDateInFormat(dateToday) {
    let currentDate = new Date(dateToday);
    let day = this.day[currentDate.getDay()];
    let month = this.monthNames[currentDate.getMonth()];
    let date = currentDate.getDay();
    let displayDate = `${day.toString()},
    ${month.toString()} 
    ${date.toString()};`;
    return displayDate;
  }
}
