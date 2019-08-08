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
    {name: 'dep 1', _id: 'sdiaoj2iodjasoi'},
    {name: 'dep 2', _id: 'oj2iodsdasfjasoi'},
    {name: 'dep 3', _id: 'fdasdf3et'},
    {name: 'dep 4', _id: 'dgasdgwet3'},
  ];

  constructor() { }

  ngOnInit() {
  }

  save() {

  }

  cancel() {

  }

  edit(dep: Department) {

  }

  delete(dep: Department) {

  }

}
