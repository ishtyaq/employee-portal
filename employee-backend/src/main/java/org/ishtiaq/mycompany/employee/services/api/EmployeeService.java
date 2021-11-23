package org.ishtiaq.mycompany.employee.services.api;

import org.ishtiaq.mycompany.employee.dao.entities.Employee;
import org.springframework.data.domain.Pageable;

public interface EmployeeService {

    Employee save(Employee employee);

    void deleteById(long theId);

    Employee findById(long theId);

    Iterable<Employee> getEmployees();

    Iterable<Employee> findPaginatedEmployees(Pageable pageAndSize);
}
