import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FirstEpisodeCardComponent } from './first-episode-card.component';


describe('FirstEpisodeCardComponent', () => {
  let component: FirstEpisodeCardComponent;
  let fixture: ComponentFixture<FirstEpisodeCardComponent>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedShowName: string = "Black Clover";
  let expectedShowEpisode: string = 'E1 - Asta and Yuno';
  let expectedLanguage: string = "Subbed";


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [FirstEpisodeCardComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstEpisodeCardComponent);
    component = fixture.componentInstance;

    cardDe = fixture.debugElement.query(By.css('.card'));
    cardEl = cardDe.nativeElement;

    component.title = "Black Clover";
    component.episode = "E1 - Asta and Yuno";
    component.language = "Subbed";

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display show title', () => {
      expect(cardEl.textContent).toContain(expectedShowName);
  })

  it('should display show episode name', () => {
    expect(cardEl.textContent).toContain(expectedShowEpisode);
  })

  it('should display show language', () => {
    expect(cardEl.textContent).toContain(expectedLanguage);
  })
});