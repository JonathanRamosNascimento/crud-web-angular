import { DepartmentService } from './../department.service';
import { Department } from './../department';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  depName: string = '';
  departments: Department[] = [
    { name: 'dep 1', _id: 'sdiaoj2iodjasoi' },
    { name: 'dep 2', _id: 'oj2iodsdasfjasoi' },
    { name: 'dep 3', _id: 'fdasdf3et' },
    { name: 'dep 4', _id: 'dgasdgwet3' },
  ];

  constructor(
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
    this.departmentService.get().subscribe((deps) => this.departments = deps);
  }

  save() {
    this.departmentService.add({ name: this.depName })
      .subscribe(
        (dep) => {
          console.log(dep);
          this.clearFields();
        },
        (err) => {
          console.error(err);
        })
  }

  clearFields() {
    this.depName = '';
  }

  cancel() {

  }

  edit(dep: Department) {

  }

  delete(dep: Department) {

  }

}
