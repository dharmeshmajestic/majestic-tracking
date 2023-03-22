import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { MembershiptabPage } from './membershiptab.page';

describe('MembershiptabPage', () => {
  let component: MembershiptabPage;
  let fixture: ComponentFixture<MembershiptabPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershiptabPage ],
      
    }).compileComponents();

    fixture = TestBed.createComponent(MembershiptabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
