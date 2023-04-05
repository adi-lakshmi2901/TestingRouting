import { AppComponent } from "./app.component";
import { FakeService } from "./service/fake.service";
 describe('App component',()=>{
  let component:AppComponent;
  let service: FakeService;
  beforeEach(()=>{
    component = new AppComponent(service);
  })
  test('component loaded or not',()=>{
    expect(component).toBeTruthy();
  })
 })



