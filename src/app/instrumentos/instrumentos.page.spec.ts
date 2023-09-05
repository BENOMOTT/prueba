import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstrumentosPage } from './instrumentos.page';

describe('InstrumentosPage', () => {
  let component: InstrumentosPage;
  let fixture: ComponentFixture<InstrumentosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InstrumentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
