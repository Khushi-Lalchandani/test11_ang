import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { EmployeeCardComponent } from './employee-card/employee-card.component';

@NgModule({
  declarations: [AppComponent, EmployeeCardComponent],
  imports: [BrowserModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
