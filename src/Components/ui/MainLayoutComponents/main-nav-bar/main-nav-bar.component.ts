import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavBarSearchBarComponent } from "../nav-bar-search-bar/nav-bar-search-bar.component";

@Component({
  selector: 'app-main-nav-bar',
  imports: [NavBarSearchBarComponent],
  templateUrl: './main-nav-bar.component.html',
  styleUrl: './main-nav-bar.component.css'
})
export class MainNavBarComponent {
}


