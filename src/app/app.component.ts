import { Component, signal } from '@angular/core';
import { APIConnService } from '../../Services/apiconn.service';
import { Task } from '../../Models/Task';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private apiconn : APIConnService) {}
  title = 'TaskManagerUI';

  tasks = signal<Task[]>([]);
  
  LoadTasks() {
    this.apiconn.getAllTasks().subscribe({
      next: (data) => {
        this.tasks.set(data);
      }
    })
  }
}
