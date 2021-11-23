import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/_models/employee';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { ConfirmService } from 'src/app/_services/confirm.service';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  pagination: Pagination;
  pageNumber: number = 1;
  pageSize: number = 2;

  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private confirmService: ConfirmService
  ) {}
  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService
      .getPaginatedEmployees(this.pageNumber - 1, this.pageSize)
      .subscribe(
        (response) => {
          this.employees = response.result;
          this.pagination = response.pagination;
          console.log(response);
          // if (response.length == 0) this.toastr.warning('No data found.');
        },
        (error) => {
          console.log(error);
          this.toastr.error(error.error);
        }
      );
  }

  deleteEmployee(id: number) {
    console.log(id);
    this.confirmService
      .confirm('Confirm Delete', 'Are you sure you want to delete?')
      .subscribe((result) => {
        if (result) {
          this.employeeService.deleteEmployee(id).subscribe(() => {
            this.toastr.success('deleted.');
            this.getEmployees();
          });
        }
      });
  }

  pageChanged(event: any) {
    this.pageNumber = event.page;
    console.log(this.pageNumber);
    //  this.memberService.setUserParams(this.userParams);
    this.getEmployees();
    this.pageNumber = this.pageNumber;
  }
}
