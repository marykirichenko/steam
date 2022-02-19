import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { GamesComponent } from './components/games/games.component';
import { LibraryComponent } from './components/library/library.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { FriendsComponent } from './components/friends/friends.component';
import {canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from "@angular/fire/auth-guard";

const redirectUnlogined = () => redirectUnauthorizedTo([''])
const redirectLogined = () => redirectLoggedInTo(['/library'])

const appRoutes: Routes = [
  {path: '', component: LoginComponent,...canActivate(redirectLogined)},
  {path: 'games', component: GamesComponent},
  {path: 'library', component: LibraryComponent, ...canActivate(redirectUnlogined)},
  {path: 'profile', component: ProfileComponent, ...canActivate(redirectUnlogined)},
  {path: 'friends', component: FriendsComponent, ...canActivate(redirectUnlogined)},
];

@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class appRoutingModule { }
