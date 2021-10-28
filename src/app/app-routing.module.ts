import { AdminCongesComponent } from './admin/admin-conges/admin-conges.component';
import { EmployeCongesComponent } from './employe/employe-conges/employe-conges.component';
import { EmployeAddCongeComponent } from './employe/employe-add-conge/employe-add-conge.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardEmployeComponent } from './board-employe/board-employe.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AllOffresComponent } from './all-offres/all-offres.component';
import { AdminAccueilComponent } from './admin/admin-accueil/admin-accueil.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminAddUserComponent } from './admin/admin-add-user/admin-add-user.component';
import { UserPostulationsComponent } from './user/user-postulations/user-postulations.component';
import { AdminOffresComponent } from './admin/admin-offres/admin-offres.component';
import { AdminAddOffreComponent } from './admin/admin-add-offre/admin-add-offre.component';
import { AdminEditOffreComponent } from './admin/admin-edit-offre/admin-edit-offre.component';
import { AdminEditUserComponent } from './admin/admin-edit-user/admin-edit-user.component';
import { EmployeAccueilComponent } from './employe/employe-accueil/employe-accueil.component';
import { AdminDetailUserComponent } from './admin/admin-detail-user/admin-detail-user.component';

const routes: Routes = [
  { path: 'home', component: AllOffresComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'user/postulations/:id', component: UserPostulationsComponent },
  {
    path: 'employe', component: BoardEmployeComponent,
    children: [
      { path: 'accueil', component: EmployeAccueilComponent },
      { path: 'addConge', component: EmployeAddCongeComponent },
      { path: 'conges', component: EmployeCongesComponent },
    ]

  },
  {
    path: 'admin', component: BoardAdminComponent,
    children: [
      { path: 'accueil', component: AdminAccueilComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'addUser', component: AdminAddUserComponent },
      { path: 'editUser/:id', component: AdminEditUserComponent },
      { path: 'detailUser/:id', component: AdminDetailUserComponent },
      { path: 'offresEmploi', component: AdminOffresComponent },
      { path: 'addOffre', component: AdminAddOffreComponent },
      { path: 'editOffre/:id', component: AdminEditOffreComponent },
      { path: 'conges', component: AdminCongesComponent },
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }