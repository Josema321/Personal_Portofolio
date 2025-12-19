import { Component, signal } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home';
import { ProjectsComponent } from './pages/projects/projects';
import { AboutComponent } from './pages/about/about';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HomeComponent, ProjectsComponent, AboutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('DevPortofolio');
}
