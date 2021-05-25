import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { TestComponent } from './test/test.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    HomeComponent,
    SidebarComponent,    
    LancamentosComponent, TestComponent, FuncionarioCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatTableModule,
    MatCardModule,
    FlexLayoutModule,    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
