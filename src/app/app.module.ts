import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TimepickerService } from './timepicker.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, DatepickerComponent],
  bootstrap: [AppComponent],
  providers: [TimepickerService]
})
export class AppModule {}
