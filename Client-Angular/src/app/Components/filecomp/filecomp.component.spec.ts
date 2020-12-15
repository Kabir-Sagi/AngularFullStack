import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilecompComponent } from './filecomp.component';

describe('FilecompComponent', () => {
  let component: FilecompComponent;
  let fixture: ComponentFixture<FilecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
