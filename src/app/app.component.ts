import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rootEmployees!: Employee[];

  constructor(private empService: EmployeeService) {
    this.rootEmployees = this.empService.employee_data.filter(
      (emp) => emp.managerId === null
    );
  }
}
