import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  name = 'sajid';
  @Input() result: string = 'Sajid';
}
