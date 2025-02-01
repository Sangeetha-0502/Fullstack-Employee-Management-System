package com.example.SpringBoot_EMS.Mapper;

import com.example.SpringBoot_EMS.Dto.EmployeDto;
import com.example.SpringBoot_EMS.Entity.Employe;

public class EmployeMapper {

	public static EmployeDto mapToEmployeDto(Employe employe) {

		return new EmployeDto(employe.getSerialNo(),employe.getId(), employe.getFirstName(), employe.getLastName(), employe.getEmail()

		);

	}
	
	public static Employe mapToEmployee(EmployeDto employedto) {
		return new Employe(employedto.getId(),employedto.getFirstName(),employedto.getLastName(),employedto.getEmail(),employedto.getSerialNo());
	}

}
