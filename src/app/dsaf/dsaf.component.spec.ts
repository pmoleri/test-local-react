import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_GRID_DIRECTIVES } from '@infragistics/igniteui-angular';
import { DsafComponent } from './dsaf.component';

describe('DsafComponent', () => {
  let component: DsafComponent;
  let fixture: ComponentFixture<DsafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DsafComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_GRID_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
