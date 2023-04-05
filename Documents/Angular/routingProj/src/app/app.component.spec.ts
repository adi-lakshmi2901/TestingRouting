import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Routes, Router } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { AppComponent } from './app.component';



describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  const routes: Routes = [
    { path: 'second-page', component: ChildComponent }
  ];

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent, ChildComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);
    
    fixture.detectChanges();
  });

  it('should navigate to /second-page and render ChildComponent', async () => {
    await router.navigate(['/second-page']);
    fixture.detectChanges();
    const childComponent = fixture.debugElement.query(By.directive(ChildComponent));
    expect(childComponent).toBeTruthy();
  });
});

