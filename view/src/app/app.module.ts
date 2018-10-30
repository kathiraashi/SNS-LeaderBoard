import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material design libaray
import { AccordionModule} from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LevelsComponent } from './levels/levels.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { BadgesComponent } from './badges/badges.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';
import { ActivityModalComponent } from './Modals/activity-modal/activity-modal.component';
import { ProfileModalComponent } from './Modals/profile-modal/profile-modal.component';
import { AcademicModalComponent } from './Modals/academic-modal/academic-modal.component';
import { ExtraCAModalComponent } from './Modals/extra-camodal/extra-camodal.component';
import { AchievementsViewModelComponent } from './Modals/achievements-view-model/achievements-view-model.component';
import { DeleteConfirmationModelComponent } from './Common-Components/delete-confirmation-model/delete-confirmation-model.component';
import { ContactAdminModelComponent } from './Modals/contact-admin-model/contact-admin-model.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LevelsComponent,
    AchievementsComponent,
    BadgesComponent,
    ActivitiesComponent,
    ProfileComponent,
    ContactAdminComponent,
    ActivityModalComponent,
    ProfileModalComponent,
    AcademicModalComponent,
    ExtraCAModalComponent,
    AchievementsViewModelComponent,
    DeleteConfirmationModelComponent,
    ContactAdminModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatTooltipModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProfileModalComponent,
   AcademicModalComponent,
   ExtraCAModalComponent,
   AchievementsViewModelComponent,
   ActivityModalComponent,
   DeleteConfirmationModelComponent,
   ContactAdminModelComponent]
})
export class AppModule {}
