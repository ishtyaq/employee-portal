package org.ishtiaq.mycompany.employee.dao.entities;


 import lombok.Data;

 import javax.persistence.*;
 import javax.validation.constraints.NotNull;
 import javax.validation.constraints.Size;

import java.time.LocalDateTime;
 import java.util.Date;

/**
 * JPA entity class for creating table in db
 * @author ishtiaq
 */
@Entity
@Table(name = "employees")
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "employee_id", unique = true, nullable = false)
    private Long id;

    @NotNull
    @Size(min=1, max=20)
    @Column(name = "first_name")
    private String firstName;

    @NotNull
    @Size(min=1, max=20)
    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email ;

    @Column(name = "phone_number ")
    private String phoneNumber;

    @Column(name = "hire_date")
    private Date hireDate ;

    @Column(name = "salary")
    private Long salary ;

    @Column(name = "manager_id")
    private Long managerId ;

    @Column(name = "department_id")
    private Long departmentId;
}
