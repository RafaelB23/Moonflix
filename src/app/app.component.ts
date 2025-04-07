import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavBarComponent } from '../Components/ui/MainLayoutComponents/main-nav-bar/main-nav-bar.component';
import { MainLayoutComponent } from "../Components/sections/main-layout/main-layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainNavBarComponent, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Moonflix';
}
