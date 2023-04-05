import { Router } from "@angular/router";
import { WelcomePageComponent } from "./welcome-page.component";
import { RouterTestingModule } from '@angular/router/testing';
import { ChildComponent } from "../child/child.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Location } from "@angular/common";
describe('Welcome-page component tests',()=>{
  let component: WelcomePageComponent;
  
  let fixture: ComponentFixture<WelcomePageComponent>;
  
  let router: Router;
  let location: Location;
  beforeEach(()=>{
    component = new WelcomePageComponent(router);
  })
  beforeEach(async()=>{
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([
        
        { path: 'second-page', component: ChildComponent }
      ]) ],
      declarations: [  WelcomePageComponent, ChildComponent],
      providers: [Location]
    }).compileComponents();

    // router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(WelcomePageComponent);
   
    component = fixture.componentInstance;
   
    fixture.detectChanges();
    
  })
  
  it('Does component loaded',()=>{
    expect(component).toBeTruthy();
  })

  it('text check', ()=>{
    const ip = fixture.nativeElement.querySelector('txt');
    
  })
  
  it('should navigate to second page upon button click',()=>{
    
    const button = fixture.nativeElement.querySelector('#button');
    button.click();
    expect(location.path()).toBe('/second-page');
  })
})
