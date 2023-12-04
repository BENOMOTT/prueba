import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InstrumentosPage } from './instrumentos.page';

describe('InstrumentosPage', () => {
  let component: InstrumentosPage;
  let fixture: ComponentFixture<InstrumentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstrumentosPage],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(InstrumentosPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
