import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks: Task[] = [];

  constructor(private taskService: TaskService){

  }
  ngOnInit(): void{
    this.taskService.getTasks().subscribe((returned_tasks)=>(this.tasks=returned_tasks));
  }

}
