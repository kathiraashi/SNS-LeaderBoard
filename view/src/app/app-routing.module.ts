import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LevelsComponent } from './levels/levels.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { BadgesComponent } from './badges/badges.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'levels', component: LevelsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contactAdmin', component: ContactAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DashboardComponent,
  LevelsComponent,
  AchievementsComponent,
  BadgesComponent,
  ActivitiesComponent,
  ProfileComponent,
  ContactAdminComponent
];
