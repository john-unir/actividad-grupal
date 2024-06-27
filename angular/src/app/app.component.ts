import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopheaderComponent} from "../components/topheader/topheader.component";
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {GridComponent} from "../components/grid/grid.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopheaderComponent, HeaderComponent, FooterComponent, GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
