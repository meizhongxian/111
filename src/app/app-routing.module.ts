import { ExpertReviewComponent } from './expert/expert-review/expert-review.component';
import { ExpertDashboardComponent } from './expert/expert-dashboard/expert-dashboard.component';
import { ExpertIndexComponent } from './expert/expert-index/expert-index.component';
import { ExpertComponent } from './expert/expert.component';
import { OrganizationDashboardComponent } from './organization/organization-dashboard/organization-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MasterIndexComponent } from './master/master-index/master-index.component';
import { MasterApprovalComponent } from './master/master-approval/master-approval.component';
import { MasterDashboardComponent } from './master/master-dashboard/master-dashboard.component';
import { MasterReviewComponent } from './master/master-review/master-review.component';
import { MasterStatisticsComponent } from './master/master-statistics/master-statistics.component';
import { OrganizationIndexComponent } from './organizationc/organization-index/organization-index.component';
import { PublicIndexComponent } from './public/public-index/public-index.component';
import { PublicExpertListComponent } from './Public/public-expert-list/public-expert-list.component';
import { PublicArticleListComponent } from './Public/public-article-list/public-article-list.component';
import { PublicExpertDetailsComponent } from './Public/public-expert-details/public-expert-details.component';
import { MasterComponent } from './master/master.component';
import { PublicComponent } from './public/public.component';
import { OrganizationComponent } from './organization/organization.component';
import {ExpertMasterAdjustComponent} from "./expert/expert-master-adjust/expert-master-adjust.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: []
  },
  {
    path: 'master',
    component: MasterComponent,
    children: [
      {
        path: '',
        component: MasterIndexComponent
      },
      {
        path: 'approval',
        component: MasterApprovalComponent
      },
      {
        path: 'dashboard',
        component: MasterDashboardComponent
      },
      {
        path: 'review',
        component: MasterReviewComponent
      },
      {
        path: 'statistics',
        component: MasterStatisticsComponent
      }
    ]
  },
  {
    path: 'organization',
    component: OrganizationComponent,
    children: [
      {
        path: '',
        component: OrganizationIndexComponent
      },
      {
        path: 'dashboard',
        component: OrganizationDashboardComponent
      }
    ]
  },
  {
    path: 'expert',
    component: ExpertComponent,
    children: [
      {
        path: '',
        component: ExpertIndexComponent
      },
      {
        path: 'dashboard',
        component: ExpertDashboardComponent
      },
      { path: 'review', component: ExpertReviewComponent },
      { path: 'adjust', component: ExpertMasterAdjustComponent }
    ]
  },
  {
    path: 'public',
    component: PublicComponent,
    children: [
      {
        path: 'expertlist',
        component: PublicExpertListComponent
      },
      {
        path: 'expertdetails',
        component: PublicExpertDetailsComponent
      },
      {
        path: 'articlelist',
        component: PublicArticleListComponent
      },
      {
        path: '',
        component: PublicIndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
