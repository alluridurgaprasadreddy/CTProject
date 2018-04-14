import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './common/guards/auth.guard';



const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: "dashboard", pathMatch: "full" },
    { path: '**', redirectTo: 'dashboard', pathMatch: "full" },



];

export const routing = RouterModule.forRoot(appRoutes);