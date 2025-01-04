import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Task } from '../../../Task';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [
    FormsModule,
    ButtonComponent,
    CommonModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Task>()

  task: string = ''
  category: string = ''
  check: boolean = false
  showAddBtn: boolean = true

  onSubmit() {
    if(!this.task) {
      alert("Adicione uma tarefa");
      return;
    }

    const newTask = {
      task: this.task,
      category: this.category,
      check: this.check
    }

    this.onAddTask.emit(newTask)

    this.task = ''
    this.category = ''
    this.check = false
  }

  showForm(show: boolean) {
    this.showAddBtn = show
  }
}
