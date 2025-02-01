package com.example.SpringBoot_EMS.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.SpringBoot_EMS.Entity.Employe;

public interface EmployeeRepository extends JpaRepository<Employe, Long> {
	
	 @Query("SELECT MAX(e.serialNo) FROM Employe e")
	 Long findMaxSerialNo();
	 
	 List<Employe> findByFirstNameContainingIgnoreCase(String firstName);

}
