import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { UserEditPage } from './user-edit.page';

describe('UserEditPage', () => {
  let component: UserEditPage;
  let fixture: ComponentFixture<UserEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditPage],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(UserEditPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
