import { MasterReviewComponent } from './master/master-review/master-review.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MasterIndexComponent } from './master/master-index/master-index.component';
import { MasterApprovalComponent } from './master/master-approval/master-approval.component';
import { MasterCMSComponent } from './master/master-cms/master-cms.component';
import { MasterDashboardComponent } from './master/master-dashboard/master-dashboard.component';
import { MasterStatisticsComponent } from './master/master-statistics/master-statistics.component';
import { PublicIndexComponent } from './public/public-index/public-index.component';
import { PublicExpertListComponent } from './Public/public-expert-list/public-expert-list.component';
import { PublicExpertDetailsComponent } from './Public/public-expert-details/public-expert-details.component';
import { PublicArticleListComponent } from './Public/public-article-list/public-article-list.component';
import { PublicArticleDetailsComponent } from './Public/public-article-details/public-article-details.component';
import { OrganizationIndexComponent } from './organizationc/organization-index/organization-index.component';
import { NgbModalModule } from './Common/modal/modal.module';
import { NgbPopoverModule } from './Common/popover/popover.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagingComponent } from './Common/paging/paging.component';
import { MasterComponent } from './master/master.component';
import { OrganizationComponent } from './organization/organization.component';
import { PublicComponent } from './public/public.component';
import { MasterCreateActivityComponent } from './master/master-create-activity/master-create-activity.component';
import { MasterCreateApprovalStepComponent } from './master/master-create-approval-step/master-create-approval-step.component';
import { MasterSetGlobalReviewComponent } from './master/master-set-global-review/master-set-global-review.component';
import { MasterCreateProvinceReviewComponent } from './master/master-create-province-review/master-create-province-review.component';
import { MasterAuditComponent } from './master/master-audit/master-audit.component';
import { OrganizationDashboardComponent } from './organization/organization-dashboard/organization-dashboard.component';
import { OrganizationCreateApplyforComponent } from './organization/organization-create-applyfor/organization-create-applyfor.component';
import { ExpertComponent } from './expert/expert.component';
import { ExpertIndexComponent } from './expert/expert-index/expert-index.component';
import { ExpertReviewComponent } from './expert/expert-review/expert-review.component';
import { ExpertMasterComponent } from './expert/expert-master/expert-master.component';
import { ExpertMasterAdjustComponent } from './expert/expert-master-adjust/expert-master-adjust.component';
import { ExpertDashboardComponent } from './expert/expert-dashboard/expert-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MasterIndexComponent,
    MasterReviewComponent,
    MasterApprovalComponent,
    MasterCMSComponent,
    MasterDashboardComponent,
    MasterStatisticsComponent,
    PublicIndexComponent,
    PublicExpertListComponent,
    PublicExpertDetailsComponent,
    PublicArticleListComponent,
    PublicArticleDetailsComponent,
    OrganizationIndexComponent,
    PagingComponent,
    MasterComponent,
    OrganizationComponent,
    PublicComponent,
    MasterCreateActivityComponent,
    MasterCreateApprovalStepComponent,
    MasterSetGlobalReviewComponent,
    MasterCreateProvinceReviewComponent,
    MasterAuditComponent,
    OrganizationDashboardComponent,
    OrganizationCreateApplyforComponent,
    ExpertComponent,
    ExpertIndexComponent,
    ExpertReviewComponent,
    ExpertMasterComponent,
    ExpertMasterAdjustComponent,
    ExpertDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModalModule.forRoot(),
    NgbPopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PublicExpertDetailsComponent,
    MasterCreateActivityComponent,
    MasterCreateApprovalStepComponent,
    MasterCreateProvinceReviewComponent,
    MasterSetGlobalReviewComponent,
    MasterAuditComponent,
    OrganizationCreateApplyforComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
