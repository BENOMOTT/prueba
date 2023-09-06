import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NOTFOUNDPage } from './not-found.page';

describe('NOTFOUNDPage', () => {
  let component: NOTFOUNDPage;
  let fixture: ComponentFixture<NOTFOUNDPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NOTFOUNDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
