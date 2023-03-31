import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-project-button',
  templateUrl: './add-project-button.component.html',
  styleUrls: ['./add-project-button.component.css']
})
export class AddProjectButtonComponent {
  public buttonText = '';
  faPlus = faPlus;

	@Input()
	set text(name: string) {
		this.buttonText = name;
	}

	@Input() color: string = '0068B4';
	@Input() type: string = 'button';
	@Output() btnClick = new EventEmitter();
	@Input() isDisabled = false;

	constructor() {}

	onClick() {
		this.btnClick.emit();
	}
}
