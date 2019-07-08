import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  public taskForm: FormGroup;

  constructor(
    public authService: AuthService,
    private router: Router,
    public tasksService: TasksService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.taskForm = this.formBuilder.group({
      task: ['', Validators.compose([Validators.required, Validators.nullValidator])]
    });
  }

  handlerLogoutUser() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  handlerAddNewTask(value) {
    if (value.task === '' || value.task === undefined) {
      return;
    }
    this.tasksService.addTask(this.authService.user.email, value.task, false);
    this.taskForm.reset();
  }

  handlerDeleteTask(task) {
    this.tasksService.deleteTask(task);
  }

  handlerMakeTaskDone(taskName: string) {
    this.tasksService.updateTask(this.authService.user.email, taskName, true);
  }

  handlerMakeTaskUnDone(taskName: string) {
    this.tasksService.updateTask(this.authService.user.email, taskName, false);
  }
}
