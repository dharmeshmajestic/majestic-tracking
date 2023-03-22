import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SafetytabPage } from './safetytab.page';

describe('SafetytabPage', () => {
  let component: SafetytabPage;
  let fixture: ComponentFixture<SafetytabPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetytabPage ],
      imports: [IonicModule.forRoot() ]
    }).compileComponents();

    fixture = TestBed.createComponent(SafetytabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
