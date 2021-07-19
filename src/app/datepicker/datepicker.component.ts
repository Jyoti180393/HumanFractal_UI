import { Component, OnInit } from '@angular/core';
import { TimepickerService } from '../timepicker.service';

@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  dateSelected;
  maxDate;
  minDate;
  avilableTimeSlot;
  isSlotAvailable = false;
  timeSlots = [];
  formattedDate;

  constructor(private timeSlot: TimepickerService) {}

  ngOnInit() {
    this.maxDate = this.timeSlot.formatteDate(
      this.timeSlot.dates.slots[this.timeSlot.totalDates - 1].date
    );
    document.getElementById('calender').setAttribute('max', this.maxDate);
    this.minDate = this.timeSlot.formatteDate(
      this.timeSlot.dates.slots[0].date
    );
    document.getElementById('calender').setAttribute('min', this.minDate);
  }
  onClick() {
    this.isSlotAvailable = false;
    this.timeSlots = [];
  }
  checkSlot() {
    this.isSlotAvailable = true;
    this.dateSelected = (document.getElementById(
      'calender'
    ) as HTMLInputElement).value;
    this.formattedDate =
      this.dateSelected !== ''
        ? this.timeSlot.getTodayDateInFormat(this.dateSelected)
        : '';
    if (this.formattedDate !== '') {
      this.avilableTimeSlot = this.timeSlot.dates.slots.find(date => {
        if (this.dateSelected === this.timeSlot.formatteDate(date.date)) {
          return date.timeSlots;
        }
      });
      this.timeSlots = this.avilableTimeSlot
        ? this.avilableTimeSlot.timeSlots
        : [];
    }
  }
}
