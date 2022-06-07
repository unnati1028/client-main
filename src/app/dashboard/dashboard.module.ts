import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileService } from '../profile/services/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptor } from '../shared/interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayExpComponent } from './components/display-exp/display-exp.component';
import { DashboardActionComponent } from './components/dashboard-action/dashboard-action.component';
import { DisplayEduComponent } from './components/display-edu/display-edu.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardActionComponent,
    DisplayExpComponent,
    DisplayEduComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    DashboardRoutingModule,
  ],
  providers: [ProfileService, httpInterceptor],
})
export class DashboardModule {}
