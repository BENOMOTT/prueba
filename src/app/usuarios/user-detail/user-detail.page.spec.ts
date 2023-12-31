import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { UserDetailPage } from './user-detail.page';

describe('UserDetailPage', () => {
  let component: UserDetailPage;
  let fixture: ComponentFixture<UserDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailPage],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(UserDetailPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
