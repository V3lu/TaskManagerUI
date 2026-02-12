import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIConnService {
  constructor(private http: HttpClient) { }
  
  taskControllerUrlGetReturnAllTasks = 'https://localhost:7023/api/Task/returnalltasks';

  public getAllTasks(): Observable<any> {
    return this.http.get<any>(this.taskControllerUrlGetReturnAllTasks);
  }
}
