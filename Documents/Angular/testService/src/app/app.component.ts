import { Component } from '@angular/core';
import { Data } from './consts';
import { FakeService } from './service/fake.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testService';
  data:Data[]=[];
  constructor( private service: FakeService){}

  ngOnInit(){
    this.service.getData().subscribe((data)=>console.log('data',data))
   
  }
}
