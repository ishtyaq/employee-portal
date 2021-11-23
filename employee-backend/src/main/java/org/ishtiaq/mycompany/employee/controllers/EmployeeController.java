package org.ishtiaq.mycompany.employee.controllers;

import org.ishtiaq.mycompany.employee.dao.entities.Employee;
import org.ishtiaq.mycompany.employee.services.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Rest service for integrating with Employee data
 */
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    EmployeeServiceImpl empService;

    /**
     * Return all employees in the database
     * @return
     */
    @GetMapping
    public Iterable<Employee> getEmployees(){
        return empService.getEmployees();
    }

    /**
     * Retreive employee by primary key
     * @param id: EmployeeID
     * @return
     */
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable("id") Long id) {
        return empService.findById(id);
    }

    /**
     * Creat new employee or update existing employee
     * @param employee
     * @return
     */
    @PostMapping(consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public Employee create(@RequestBody @Valid Employee employee) {
        return empService.save(employee);
    }

    /**
     * Delete employee by primary key
     * @param id
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") Long id) {
        try {
            empService.deleteById(id);
        }
        catch(EmptyResultDataAccessException e) {

        }
    }

    /**
     * Retreive employee by page, frist page starts with 0
     * @param page
     * @param size
     * @return
     */
    @GetMapping(params= {"page", "size"})
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Employee> findPaginatedEmployees(@RequestParam("page") int page,
                                                     @RequestParam("size") int size){
        Pageable pageAndSize = PageRequest.of(page, size);

        return empService.findPaginatedEmployees(pageAndSize);
    }
}
