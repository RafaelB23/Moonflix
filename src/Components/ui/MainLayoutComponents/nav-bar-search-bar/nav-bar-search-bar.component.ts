import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar-search-bar',
  imports: [],
  templateUrl: './nav-bar-search-bar.component.html',
  styleUrl: './nav-bar-search-bar.component.css'
})
export class NavBarSearchBarComponent {
  @Input() isSearchActive: boolean = false;
  @Input() searchText: string = '';
  @ViewChild('searchInput') searchInput!: ElementRef;

  focusSearchInput() {
    setTimeout(() => {
    this.searchInput.nativeElement.focus();
    })
  }
  
  blurHandler() {
    this.isSearchActive = false;
  }

  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
    if (this.isSearchActive) {
      setTimeout(() => {
        this.searchInput.nativeElement.focus();
        })
    } 
  }
  onSearch() {
    this.searchText = this.searchInput.nativeElement.value;
    alert("Búsqueda: " + this.searchText);
  }
}
