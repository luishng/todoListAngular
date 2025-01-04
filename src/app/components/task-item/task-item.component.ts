import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../Task';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!:Task;
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onToggleTask = new EventEmitter<Task>();

  faTimes = faTimes

  onDelete(task: Task) {
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task) {
    this.onToggleTask.emit(task)
  }
}
