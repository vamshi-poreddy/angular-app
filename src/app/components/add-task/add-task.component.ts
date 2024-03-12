import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean=false;
  showAddTask!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe(value=>this.showAddTask = value);
  }

  onSubmit(){
    if(!this.text){
      alert("Please add Task");
      return;
    }
    if(!this.day){
      alert("Please add Day and Time");
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask);

    this.text="";
    this.day = "";
    this.reminder=false;
  }

}
