import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [CommonModule, TaskItemComponent, AddTaskComponent]
})
export class TasksComponent {

  tasks: Task[] = [];

  constructor(private taskService: TaskService){

  }
  ngOnInit(): void{
    this.taskService.getTasks().subscribe((returned_tasks)=>(this.tasks=returned_tasks));
  }

  deleteTask(task: Task){

    this.taskService.deleteTask(task)
    .subscribe(()=>(this.tasks=this.tasks.filter((t)=>t.id !==task.id)));
  }
  
  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)));
  }

}