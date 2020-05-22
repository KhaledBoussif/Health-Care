import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'Location', loadChildren: './pages/geolocation/geolocation.module#GeolocationPageModule'},
  { path: 'Statistical', loadChildren: './pages/Statistical/Statistical.module#StatisticalPageModule'},
  { path: 'Quiz', loadChildren: './pages/quiz/quiz.module#QuizPageModule' },
  { path: 'modale-page-food', loadChildren: './pages/modale-page-food/modale-page-food.module#ModalePageFoodPageModule' },
  { path: 'doctorspage', loadChildren: './pages/doctorspage/doctorspage.module#DoctorspagePageModule' },
  { path: 'pharmaciespage', loadChildren: './pages/pharmaciespage/pharmaciespage.module#PharmaciespagePageModule' },
  { path: 'doctors', loadChildren: './pages/doctors/doctors.module#DoctorsPageModule' },
  { path: 'pharmacies', loadChildren: './pages/pharmacies/pharmacies.module#PharmaciesPageModule' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
