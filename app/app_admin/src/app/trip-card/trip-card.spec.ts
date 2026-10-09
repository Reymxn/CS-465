import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripCard } from './trip-card';

describe('TripCard', () => {
  let component: TripCard;
  let fixture: ComponentFixture<TripCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripCard]
    }).compileComponents();

    fixture = TestBed.createComponent(TripCard);
    component = fixture.componentInstance;

    component.trip = {
      code: 'TEST001',
      name: 'Test Reef',
      length: '7 nights',
      start: '2026-10-09',
      resort: 'Test Resort',
      perPerson: '999',
      image: 'reef1.jpg',
      description: 'Mock trip for Angular unit testing'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the mock trip name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test Reef');
  });
});