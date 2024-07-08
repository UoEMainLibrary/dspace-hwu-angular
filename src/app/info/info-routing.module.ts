import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nBreadcrumbResolver } from '../core/breadcrumbs/i18n-breadcrumb.resolver';
import {
  PRIVACY_PATH, END_USER_AGREEMENT_PATH,
  FEEDBACK_PATH, ABOUT_PATH, ACCESSIBILITY_PATH, COPYRIGHT_PATH, ORGANISED_PATH
} from './info-routing-paths';
import { ThemedEndUserAgreementComponent } from './end-user-agreement/themed-end-user-agreement.component';
import { ThemedPrivacyComponent } from './privacy/themed-privacy.component';
import { ThemedFeedbackComponent } from './feedback/themed-feedback.component';
import { FeedbackGuard } from '../core/feedback/feedback.guard';
import { environment } from '../../environments/environment';

// CUSTOMISED
import { ThemedAboutComponent } from './about/themed-about.component';
import { ThemedAccessibilityComponent } from './accessibility/themed-accessibility.component';
import { ThemedCopyrightComponent } from './copyright/themed-copyright.component';
import { ThemedOrganisedComponent } from './organised/themed-organised.component';

const imports = [
  RouterModule.forChild([
    {
      path: FEEDBACK_PATH,
      component: ThemedFeedbackComponent,
      resolve: { breadcrumb: I18nBreadcrumbResolver },
      data: { title: 'info.feedback.title', breadcrumbKey: 'info.feedback' },
      canActivate: [FeedbackGuard]
    }
  ])
];

if (environment.info.enableEndUserAgreement) {
  imports.push(
    RouterModule.forChild([
      {
        path: END_USER_AGREEMENT_PATH,
        component: ThemedEndUserAgreementComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.end-user-agreement.title', breadcrumbKey: 'info.end-user-agreement' }
      }
    ]));
}
if (environment.info.enablePrivacyStatement) {
  imports.push(
    RouterModule.forChild([
      {
        path: PRIVACY_PATH,
        component: ThemedPrivacyComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.privacy.title', breadcrumbKey: 'info.privacy' }
      }
    ]));
}
imports.push(
  RouterModule.forChild([
    {
      path: ABOUT_PATH,
      component: ThemedAboutComponent,
      resolve: { breadcrumb: I18nBreadcrumbResolver },
      data: { title: 'info.about.title', breadcrumbKey: 'info.about' }
    }
  ]));

imports.push(
  RouterModule.forChild([
    {
      path: ACCESSIBILITY_PATH,
      component: ThemedAccessibilityComponent,
      resolve: { breadcrumb: I18nBreadcrumbResolver },
      data: { title: 'info.accessibility.title', breadcrumbKey: 'info.accessibility' }
    }
  ]));

imports.push(
  RouterModule.forChild([
    {
      path: COPYRIGHT_PATH,
      component: ThemedCopyrightComponent,
      resolve: { breadcrumb: I18nBreadcrumbResolver },
      data: { title: 'info.copyright.title', breadcrumbKey: 'info.copyright' }
    }
  ]));

imports.push(
  RouterModule.forChild([
    {
      path: ORGANISED_PATH,
      component: ThemedOrganisedComponent,
      resolve: { breadcrumb: I18nBreadcrumbResolver },
      data: { title: 'info.organised.title', breadcrumbKey: 'info.organised' }
    }
  ]));

@NgModule({
  imports: [
    ...imports
  ]
})
/**
 * Module for navigating to components within the info module
 */
export class InfoRoutingModule {
}
