import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrantsDetailsHomePage } from './grants-details-home.page';

describe('GrantsDetailsHomePage', () => {
  let component: GrantsDetailsHomePage;
  let fixture: ComponentFixture<GrantsDetailsHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsDetailsHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrantsDetailsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
