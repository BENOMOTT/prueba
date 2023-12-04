import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ProductAddPage } from './product-add.page';

describe('ProductAddPage', () => {
  let component: ProductAddPage;
  let fixture: ComponentFixture<ProductAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAddPage],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ProductAddPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
