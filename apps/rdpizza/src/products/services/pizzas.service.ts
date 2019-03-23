import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Pizza } from '@RD-Pizza-Nx/data';

@Injectable()
export class PizzasService {
  private pizzaUrl = '/api/pizzas';

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(`${this.pizzaUrl}`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(`${this.pizzaUrl}`, payload)
      .pipe(catchError((error: any) => throwError(error)));
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(`${this.pizzaUrl}`, payload)
      .pipe(catchError((error: any) => throwError(error)));
  }

  removePizza(id: number): Observable<Pizza> {
    return this.http
      .delete<Pizza>(`${this.pizzaUrl}/${id}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
