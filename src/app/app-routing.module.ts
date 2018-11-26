import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { EditDocumentComponent } from './edit-document/edit-document.component';
import { CreateAccountComponent } from './createaccount/createaccount.component';
import { ViewDocumentComponent } from './view-document/view-document.component';
import { QuickResponseComponent } from './quick-response/quick-response.component';
import { ManageResponseComponent } from './manage-response/manage-response.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PoliciesPageComponent } from './policies-page/policies-page.component';
import { EditPoliciesComponent } from './edit-policies/edit-policies.component';
import { ChangelogComponent } from './changelog/changelog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'editarDocumento',
    component: EditDocumentComponent
  },
  {
    path: 'createaccount',
    component: CreateAccountComponent
  },
  {
    path: 'viewdocument',
    component: ViewDocumentComponent
  },
  {
    path: 'quickreponse',
    component: QuickResponseComponent
  },
  {
    path: 'responsemanagement',
    component: ManageResponseComponent
  },
  {
    path: 'editresponse',
    component: EditContactComponent
  },
  {
    path: 'policiespage',
    component: PoliciesPageComponent
  },
  {
    path: 'editpolicies',
    component: EditPoliciesComponent
  },
  {
    path: 'changelog',
    component: ChangelogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
