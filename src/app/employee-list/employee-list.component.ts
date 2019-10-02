import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees;
  current_page = 0;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees(this.current_page).subscribe(response => 
      this.employees = response
    );
  }

  public onPrevious($event) {
    if (this.current_page > 0) {
      this.current_page--;
      this.ngOnInit();
    }
  }

  public onNext($event) {
    this.current_page++;
    this.ngOnInit();
  }

}
