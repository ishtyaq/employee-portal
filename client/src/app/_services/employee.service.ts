import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../_models/employee';
import { PaginatedResult, Pagination } from '../_models/pagination';
import { map, take } from 'rxjs/operators';
import { of, pipe } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
//   })
// }
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl: string = environment.apiUrl;
  paginatedResult: PaginatedResult<Employee[]> = new PaginatedResult<
    Employee[]
  >();
  employees: Employee[] = [];

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl + 'employees');
  }

  getPaginatedEmployees(page?: number, itemsPerPage?: number) {
    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('page', page.toString());
      params = params.append('size', itemsPerPage.toString());
    }
    return this.http
      .get<Employee[]>(
        //this.baseUrl + 'employees?page=' + page + '&size=' + itemsPerPage
        this.baseUrl + 'employees',
        { observe: 'response', params }
      )
      .pipe(
        map((response) => {
          console.log(response);
          this.paginatedResult.result = response.body['content'];
          if (response.body['pageable'] != null) {
            this.paginatedResult.pagination = {
              pageNumber: response.body['number'] + 1,
              size: response.body['size'],
              totalElements: response.body['totalElements'],
              totalPages: response.body['totalPages'],
            };

            return this.paginatedResult;
          }
        })
      );
  }

  saveEmployee(model: any) {
    //if (model.id == null)
    return this.http.post(this.baseUrl + 'employees', model);
    //else return this.http.put(this.baseUrl + 'employees', model);
  }
  deleteEmployee(employeeId: number) {
    console.log(employeeId);
    return this.http.delete(this.baseUrl + 'employees/' + employeeId);
  }
}
