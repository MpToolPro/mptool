import { Component } from '@angular/core';
import { LolService } from '@mptool/shared/auth';

@Component({
  selector: 'mptool-todo-entry',
  template: `<div class="todo-list">
    <div>{{ lol.name$ | async }}</div>
    <h1>Todo</h1>
    <h2>хрень какая-то</h2>
    <mptool-politics></mptool-politics>
    <tui-root>
      <button
        appearance="primary"
        tuiButton
        type="button"
        class="tui-space_right-10 tui-space_bottom-3"
      >
        primary
      </button>
      <button
        appearance="secondary"
        tuiButton
        type="button"
        class="tui-space_right-10 tui-space_bottom-3"
      >
        secondary
      </button>
    </tui-root>
    <div class="list">
      <label> <input type="checkbox" name="item" /> Item </label>
    </div>
  </div> `,
})
export class RemoteEntryComponent {
  constructor(public lol: LolService) {}
}
