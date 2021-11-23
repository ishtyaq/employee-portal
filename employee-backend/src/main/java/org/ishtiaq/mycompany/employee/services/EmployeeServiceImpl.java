package org.ishtiaq.mycompany.employee.services;

import org.ishtiaq.mycompany.employee.dao.entities.Employee;
import org.ishtiaq.mycompany.employee.dao.repository.EmployeeRepository;
import org.ishtiaq.mycompany.employee.services.api.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    EmployeeRepository empRepo;

    @Override
    public Employee save(Employee employee) {
        return empRepo.save(employee);
    }

    @Override
    public void deleteById(long theId) {
        empRepo.deleteById(theId);
    }

    @Override
    public Employee findById(long theId) {
        return empRepo.findById(theId).get();
    }

    @Override
    public Iterable<Employee> getEmployees() {
        return empRepo.findAll();
    }

    @Override
    public Iterable<Employee> findPaginatedEmployees(Pageable pageAndSize) {
        return empRepo.findAll(pageAndSize);
    }
}
