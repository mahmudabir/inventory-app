import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html',
})
export class ProductDepartmentComponent implements OnInit {
  @Input() product?: Product;

  constructor() {
  }

  // tslint:disable-next-line:typedef
  getDepartmentLength(departments: string[] = []): number {
    return departments.length - 1;
  }

  ngOnInit(): void {
  }

}
