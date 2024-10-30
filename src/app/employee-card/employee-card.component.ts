import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent {
  employeeTree = [];
  employee_data = this.eService.employee_data;

  constructor(private eService: EmployeeService) {}

  ngOnInit(): void {
    console.log(this.employee_data);
  }
  // hasSubordinate(id: number) {
  //   return this.employee_data.every(
  //     (emp) => emp.id === id || !emp.subordinates?.includes(id)
  //   );
  // }
}
