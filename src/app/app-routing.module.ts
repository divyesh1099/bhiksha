import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoneyComponent } from './money/money.component';
import { EmotionsComponent } from './emotions/emotions.component';
import { DateComponent } from './date/date.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'money', component: MoneyComponent },
  { path: 'emotions', component: EmotionsComponent },
  { path: 'date', component: DateComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
