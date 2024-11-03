import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent implements OnInit {
  employee_data = this.eService.employee_data;

  @Input() rootEmployee!: Employee[];
  constructor(private eService: EmployeeService) {}
  ngOnInit(): void {
    console.log(this.rootEmployee[0]);
  }
}
