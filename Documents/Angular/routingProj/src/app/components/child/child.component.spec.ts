import { ChildComponent } from "./child.component";
// import { TestBed } from "@angular/core/testing";
// import
describe('child component testing',()=>{
  let component : ChildComponent;

  beforeEach(()=>{
    component = new ChildComponent;
  });
 
  it("component loaded",()=>{
    expect(component).toBeTruthy();
  })
})