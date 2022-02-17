import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { GamesComponent } from './games/games.component';
import { LibraryComponent } from './library/library.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FriendsComponent } from './friends/friends.component';

const appRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'games', component: GamesComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'friends', component: FriendsComponent},
];

@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class appRoutingModule { }
