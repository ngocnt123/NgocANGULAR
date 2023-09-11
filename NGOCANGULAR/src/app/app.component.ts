import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'NGOCANGULAR';
  @Input() checked = false;
  @Output() checkedChanged = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}
  toggle() {
    this.checked = !this.checked;
    this.checkedChanged.emit(this.checked);
  }
}
