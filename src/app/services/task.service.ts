import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from "../Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
    //const tasks = of(TASKS);
    //return tasks;
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

}
