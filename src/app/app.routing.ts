import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './common/guards/auth.guard';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: "dashboard", pathMatch: "full" },
    { path: '**', redirectTo: 'dashboard', pathMatch: "full" },



];

export const routing = RouterModule.forRoot(appRoutes);