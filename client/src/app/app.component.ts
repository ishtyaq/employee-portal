import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './_services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  employees: any;
  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (response) => {
        this.employees = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
