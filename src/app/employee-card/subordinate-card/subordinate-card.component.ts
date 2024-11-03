import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee.model';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-subordinate-card',
  templateUrl: './subordinate-card.component.html',
  styleUrls: ['./subordinate-card.component.scss'],
})
export class SubordinateCardComponent implements OnInit {
  @Input() employee!: number[];
  subordinates!: Employee[];
  employee_data = this.eService.employee_data;
  ngOnInit(): void {
    console.log(this.employee);
    this.loadSubordinates();
  }
  loadSubordinates() {
    this.subordinates = this.eService.getEmployeesByIds(this.employee);
    console.log(this.subordinates);
  }
  constructor(private eService: EmployeeService) {}
}
