import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SidebarModule } from 'ng-sidebar';
import { HomeComponent } from './home/home.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { EditarSeccionComponent } from './edit-document/editar-seccion/editar-seccion.component';
import { CreateAccountComponent } from './createaccount/createaccount.component';
import { ViewDocumentComponent } from './view-document/view-document.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { QuickResponseComponent } from './quick-response/quick-response.component';
import { ManageResponseComponent } from './manage-response/manage-response.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PoliciesPageComponent } from './policies-page/policies-page.component';
import { EditPoliciesComponent } from './edit-policies/edit-policies.component';
import { ChangelogComponent } from './changelog/changelog.component';

import { HttpModule } from '@angular/http';
import { CommonService } from './common.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    SignInComponent,
    EditDocumentComponent,
    EditarSeccionComponent,
    CreateAccountComponent,
    ViewDocumentComponent,
    QuickResponseComponent,
    ManageResponseComponent,
    EditContactComponent,
    PoliciesPageComponent,
    EditPoliciesComponent,
    ChangelogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    HttpModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
