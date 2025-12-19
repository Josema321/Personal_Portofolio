import { Routes } from '@angular/router';
import { HomeComponent} from './pages/home/home';
import { AboutComponent} from './pages/about/about';
import { ProjectsComponent} from './pages/projects/projects';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  // route paths
  { path: 'home',
    component: HomeComponent,
    title: 'Portofolio - Menu'
  },
  { path: 'about',
    component: AboutComponent,
    title: 'AboutMe - Contact'
  },
  { path: 'projects',
    component: ProjectsComponent,
    title: 'Projects - Skills'
  },

  // wildcard route
  { path: '**', redirectTo: 'home'}


];
