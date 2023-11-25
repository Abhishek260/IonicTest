import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbhiTestPage } from './abhi-test.page';

describe('AbhiTestPage', () => {
  let component: AbhiTestPage;
  let fixture: ComponentFixture<AbhiTestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AbhiTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
