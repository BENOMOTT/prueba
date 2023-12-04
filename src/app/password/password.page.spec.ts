import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PasswordPage } from './password.page';

describe('PasswordPage', () => {
  let component: PasswordPage;
  let fixture: ComponentFixture<PasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordPage],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(PasswordPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
