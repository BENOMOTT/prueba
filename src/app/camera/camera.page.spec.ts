import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CameraPage } from './camera.page';

describe('CameraPage', () => {
  let component: CameraPage;
  let fixture: ComponentFixture<CameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CameraPage],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(CameraPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
