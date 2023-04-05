import { Component } from '@angular/core';
import { ToUpperCasePipe } from 'src/app/to-upper-case.pipe';
// import { toUpperCasePipe } from 'src/app/toUppercasepipe';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  constructor(){
    let toUpper: ToUpperCasePipe;
  }
}
