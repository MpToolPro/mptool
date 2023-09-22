import { Component } from '@angular/core';
import { LolService } from '@mptool/shared/auth';

@Component({
  selector: 'mptool-todo-entry',
  template: `<div class="todo-list">
    <div>{{ lol.name$ | async }}</div>
    <h1>Todo</h1>
    <div class="list">
      <label> <input type="checkbox" name="item" /> Item </label>
    </div>
  </div> `,
})
export class RemoteEntryComponent {
  constructor(public lol: LolService) {}
}