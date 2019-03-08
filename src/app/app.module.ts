import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { BottomHeaderComponent } from './bottom-header/bottom-header.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AgentsComponent } from './agents/agents.component';
import { AllPropertiesComponent } from './all-properties/all-properties.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { SubmitPropertyComponent } from './submit-property/submit-property.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { OwenerPropertySubmitComponent } from './owener-property-submit/owener-property-submit.component';
import { AllServiceService } from './services/all-service.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { LoaderService } from './services/loader.service';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { MessageModalComponent } from './modals/message-modal/message-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    PropertyListComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    AgentsComponent,
    AllPropertiesComponent,
    HomeComponent,
    FooterComponent,
    ProjectsComponent,
    SubmitPropertyComponent,
    PackageDetailsComponent,
    PropertyDetailsComponent,
    OwenerPropertySubmitComponent,
    MessageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BootstrapModalModule.forRoot({container:document.body})  ],
  providers: [AllServiceService , {
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  } , LoaderService],
  entryComponents: [
    MessageModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
