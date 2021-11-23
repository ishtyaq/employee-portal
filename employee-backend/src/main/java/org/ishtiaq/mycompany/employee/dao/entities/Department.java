package org.ishtiaq.mycompany.employee.dao.entities;

import javax.persistence.Entity;


import javax.persistence.*;

/**
 * department table, not used for now
 * @author ishtiaq
 */
@Entity
@Table(name = "departments")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "department_id", unique = true, nullable = false)
    private Long id;

    @Column(name = "department_name")
    private String departmentName;

    @Column(name = "manager_id ")
    private Long managerId;
}
