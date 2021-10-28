import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardEmployeComponent } from './board-employe/board-employe.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AllOffresComponent } from './all-offres/all-offres.component';
import { AdminAccueilComponent } from './admin/admin-accueil/admin-accueil.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminAddUserComponent } from './admin/admin-add-user/admin-add-user.component';
import { UserPostulationsComponent } from './user/user-postulations/user-postulations.component';
import { AdminOffresComponent } from './admin/admin-offres/admin-offres.component';
import { AdminAddOffreComponent } from './admin/admin-add-offre/admin-add-offre.component';
import { AdminEditOffreComponent } from './admin/admin-edit-offre/admin-edit-offre.component';
import { AdminEditUserComponent } from './admin/admin-edit-user/admin-edit-user.component';
import { EmployeAddCongeComponent } from './employe/employe-add-conge/employe-add-conge.component';
import { EmployeCongesComponent } from './employe/employe-conges/employe-conges.component';
import { EmployeAccueilComponent } from './employe/employe-accueil/employe-accueil.component';
import { AdminCongesComponent } from './admin/admin-conges/admin-conges.component';
import { AdminDetailUserComponent } from './admin/admin-detail-user/admin-detail-user.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardEmployeComponent,
    BoardUserComponent,
    AllOffresComponent,
    AdminAccueilComponent,
    AdminUsersComponent,
    AdminAddUserComponent,
    UserPostulationsComponent,
    AdminOffresComponent,
    AdminAddOffreComponent,
    AdminEditOffreComponent,
    AdminEditUserComponent,
    EmployeAddCongeComponent,
    EmployeCongesComponent,
    EmployeAccueilComponent,
    AdminCongesComponent,
    AdminDetailUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
