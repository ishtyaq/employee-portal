import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  model: any = {};
  title: string = 'New Employee';
  phonePattern: string = '[- 0-9]+';
  managers = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sam' },
    { id: 3, name: 'Frank' },
  ];
  departments = [
    { id: 1, name: 'Accounts' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Customer Service' },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    console.log(history.state);
    if (history.state['employee'] != null) {
      this.title = 'Edit Employee';
      console.log('here');
      this.model = history.state['employee'];
      console.log(this.model);
    }
    this.route.queryParams.subscribe((params) => {
      console.log(params); // { orderby: "price" }

      // console.log(this.orderby); // price
    });
  }

  addNew() {
    console.log(this.model);
    let aEmployee = this.employeeService.saveEmployee(this.model);
    this.employeeService.saveEmployee(this.model).subscribe(
      () => {
        this.toastr.success('New Employee added successful.');

        this.router.navigate(['']);
      },
      (error) => {
        this.toastr.error(error);
      }
    );
  }

  cancel() {
    // this.toastr.success('Cancelled');
    this.router.navigate(['']);
  }
}
