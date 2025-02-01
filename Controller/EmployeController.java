package com.example.SpringBoot_EMS.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringBoot_EMS.Dto.EmployeDto;
import com.example.SpringBoot_EMS.Service.EmployeServiceClass;

@CrossOrigin
@RestController
@RequestMapping("/api/employe")
public class EmployeController {
	
	private EmployeServiceClass esc;
	
	
	public EmployeController(EmployeServiceClass esc) {
	
		this.esc = esc;
	}

    // add employe rest api
	@PostMapping
	public ResponseEntity<EmployeDto> createNew(@RequestBody EmployeDto employedto ){
		
		EmployeDto SavedEmploye = esc.createEmployee(employedto);
		return new ResponseEntity<>(SavedEmploye,HttpStatus.CREATED);
		
		
	}
	
	
	// get employe rest api
	@GetMapping("/{id}")
	public ResponseEntity<EmployeDto> getEmploye(@PathVariable("id") Long employeeId) {
	    EmployeDto employedto = esc.getEmploye(employeeId);  // Make sure this method is correctly implemented
	    return new ResponseEntity<>(employedto, HttpStatus.OK);
	}
	
//	@GetMapping
//	public ResponseEntity<List<EmployeDto>> getAllEmploye()
//	{
//		List<EmployeDto> collected =esc.getAllEmploye();
//		return new ResponseEntity<>(collected,HttpStatus.OK);
//	}
	@GetMapping
    public ResponseEntity<List<EmployeDto>> getEmployees(@RequestParam(required = false) String firstName) {
    if (firstName != null && !firstName.isEmpty()) {
        List<EmployeDto> collected = esc.searchEmployee(firstName);
        return new ResponseEntity<>(collected, HttpStatus.OK);// Filter based on search query
    }
    List<EmployeDto> collected = esc.getAllEmploye();
    return new ResponseEntity<>(collected, HttpStatus.OK);// Filter based on search query
	}

    // If no search query is provided, return all employees
    

	
	@PutMapping("/{id}")
	public ResponseEntity<EmployeDto> updateEmploye(@PathVariable("id") Long id, @RequestBody EmployeDto employedto){
		EmployeDto updated = esc.updateEmploye(id, employedto);
		return new ResponseEntity<>(updated,HttpStatus.OK);
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteEmploye(@PathVariable("id") Long id){
		esc.deleteEmploye(id);
		return ResponseEntity.ok("Deleted Succefully");
	}
	
//	@GetMapping("/search")
//    public ResponseEntity<List<EmployeDto>> searchEmployees(@RequestParam("query") String query) {
//       List<EmployeDto> filtered = esc.searchEmployee(query);
//       return new ResponseEntity<>(filtered,HttpStatus.OK);
//    }
	
	
	
	

}
