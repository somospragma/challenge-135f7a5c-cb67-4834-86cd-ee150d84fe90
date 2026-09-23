import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './login.page';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, FormsModule, IonicModule, AuthRoutingModule],
  providers: [AuthService]
})
export class AuthModule {}