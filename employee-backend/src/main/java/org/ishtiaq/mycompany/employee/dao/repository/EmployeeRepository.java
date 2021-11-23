package org.ishtiaq.mycompany.employee.dao.repository;

import org.ishtiaq.mycompany.employee.dao.entities.Employee;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;


//@CrossOrigin("http://localhost:4200")
//@RepositoryRestResource(collectionResourceRel = "employees", path="employees")
@Repository
public interface EmployeeRepository extends PagingAndSortingRepository<Employee,Long> {

}
