import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// common 
import { AuthGuard } from './common/guards/auth.guard';
import { TruncatePipe } from './common/truncate.pipe';
import { DataFilterPipe } from './common/data-filter.pipe';

// common Services
import { ApiService } from './common/services/api.service';
import { AuthenticationService } from './common/services/authentication.service';

// App Components
import { AppComponent } from './app.component';
import { routing } from './app.routing';

// Component
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './common/sidemenu/sidemenu.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidemenuComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    // TruncatePipe,
    // DataFilterPipe,
  ],
  providers: [
    ApiService,
    AuthenticationService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
