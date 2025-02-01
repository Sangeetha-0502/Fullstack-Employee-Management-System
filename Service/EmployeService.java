package com.example.SpringBoot_EMS.Service;

import java.util.List;

import com.example.SpringBoot_EMS.Dto.EmployeDto;
import com.example.SpringBoot_EMS.Entity.Employe;

public interface EmployeService {
	
	EmployeDto createEmployee(EmployeDto employedto);
	
	EmployeDto getEmploye(Long employeId);
	
	List<EmployeDto> getAllEmploye();
	
	List<EmployeDto> getAllEmploye(String query);
	
	EmployeDto updateEmploye(Long id,EmployeDto employedto);
	
	EmployeDto deleteEmploye(Long id);
	
	List<EmployeDto> searchEmployee(String name);
}
