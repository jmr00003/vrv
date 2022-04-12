import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowseShowcardComponent } from './browse-showcard.component';


describe('BrowseShowcardComponent', () => {
  let component: BrowseShowcardComponent;
  let fixture: ComponentFixture<BrowseShowcardComponent>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedShowName: string = "Black Clover";
  let expectedShowType: string = 'Series';
  let expectedLanguage: string = "Subbed";


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [BrowseShowcardComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseShowcardComponent);
    component = fixture.componentInstance;

    cardDe = fixture.debugElement.query(By.css('.card'));
    cardEl = cardDe.nativeElement;

    component.title = "Black Clover";
    component.type = "Series";
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
    expect(cardEl.textContent).toContain(expectedShowType);
  })

  it('should display show language', () => {
    expect(cardEl.textContent).toContain(expectedLanguage);
  })
});