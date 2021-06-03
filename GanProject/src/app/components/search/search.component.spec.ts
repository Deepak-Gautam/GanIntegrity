import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Searchomponent } from './search.component';

describe('SelectComponent', () => {
  let component: Searchomponent;
  let fixture: ComponentFixture<Searchomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Searchomponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Searchomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
