import { DepartmentService } from './department.service';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly url = 'http://localhost:3000/products';
  private productsSubject$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(null);
  private loaded: boolean = false;

  constructor(
    private http: HttpClient,
    private departmentService: DepartmentService
  ) { }

  get(): Observable<Product[]> {
    if (!this.loaded) {
      combineLatest(
        this.http.get<Product[]>(this.url),
        this.departmentService.get())
      .pipe(
        tap(([products,departments]) => console.log(products, departments)),
        map(([products, departments]) => {
          for (let p of products) {
            let ids = (p.departments as string[]);
            p.departments = ids.map((id) => departments.find(dep => dep._id == id));
          }
          return products;
        }),
        tap((products) => console.log(products))
      )
        .subscribe(this.productsSubject$);
      this.loaded = true;
    }
    return this.productsSubject$.asObservable();
  }
}
