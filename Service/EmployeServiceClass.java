package com.example.SpringBoot_EMS.Service;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import com.example.SpringBoot_EMS.Dto.EmployeDto;
import com.example.SpringBoot_EMS.Entity.Employe;
import com.example.SpringBoot_EMS.Exception.ResourceNotFoundException;
import com.example.SpringBoot_EMS.Mapper.EmployeMapper;
import com.example.SpringBoot_EMS.repository.EmployeeRepository;


@Service
public class EmployeServiceClass implements EmployeService {
	
	
	private EmployeeRepository employerepository;

	public EmployeServiceClass(EmployeeRepository employerepository) {
		
		this.employerepository = employerepository;
	}

	@Override
	public  EmployeDto createEmployee(EmployeDto employedto) {
		Long maxSerialNo = employerepository.findMaxSerialNo();
		Long newSerialNo = (maxSerialNo == null) ? 1 : maxSerialNo + 1;
		Employe createEmploye = EmployeMapper.mapToEmployee(employedto);
		createEmploye.setSerialNo(newSerialNo);
		Employe savedEmploye = employerepository.save(createEmploye);
		return EmployeMapper.mapToEmployeDto(savedEmploye);
	}

	@Override
	public EmployeDto getEmploye(Long employeId) {
		Employe employe = employerepository.findById(employeId).orElseThrow(()-> new ResourceNotFoundException("The given id is not present"));
		return EmployeMapper.mapToEmployeDto(employe);
	}

	@Override
	public List<EmployeDto> getAllEmploye() {
	    List<Employe> employees = employerepository.findAll();
	    return employees.stream().map((employe)->EmployeMapper.mapToEmployeDto(employe)).collect(Collectors.toList());
	}
	
	@Override
	public List<EmployeDto> getAllEmploye(String query) {
		List<Employe> employees = employerepository.findByFirstNameContainingIgnoreCase(query);
	    return employees.stream().map((employe)->EmployeMapper.mapToEmployeDto(employe)).collect(Collectors.toList());
	}

	@Override
	public EmployeDto updateEmploye(Long id, EmployeDto employedto) {
		Employe employe = employerepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employe id is not found"));
		//employe.setId(employedto.getId());
		employe.setFirstName(employedto.getFirstName());
		employe.setLastName(employedto.getLastName());
		employe.setEmail(employedto.getEmail());
		Employe updated = employerepository.save(employe);
		return EmployeMapper.mapToEmployeDto(updated);
	}

	@Override
	public EmployeDto deleteEmploye(Long id) {
		Employe employe = employerepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employe id is not present"));
		employerepository.delete(employe);
		renumberSerialNos();
		return EmployeMapper.mapToEmployeDto(employe);
	}

	private void renumberSerialNos() {
		List<Employe> employees = employerepository.findAll();
		Long serialNo = 1L;
		for(Employe employe:employees) {
			employe.setSerialNo(serialNo++);
		
		}
		 employerepository.saveAll(employees); 		
	}

	@Override
	public List<EmployeDto> searchEmployee(String name) {
	    List<Employe> employees = employerepository.findByFirstNameContainingIgnoreCase(name);
		return employees.stream().map((employe)->EmployeMapper.mapToEmployeDto(employe)).collect(Collectors.toList());
		
	}

	
	

}
