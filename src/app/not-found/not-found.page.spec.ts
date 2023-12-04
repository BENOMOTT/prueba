import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NOTFOUNDPage } from './not-found.page';

describe('NOTFOUNDPage', () => {
  let component: NOTFOUNDPage;
  let fixture: ComponentFixture<NOTFOUNDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NOTFOUNDPage],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(NOTFOUNDPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
