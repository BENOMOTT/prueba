import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ProductDetailPage } from './product-detail.page';

describe('ProductDetailPage', () => {
  let component: ProductDetailPage;
  let fixture: ComponentFixture<ProductDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailPage],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ProductDetailPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
