import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GraficosComponent } from './components/graficos/graficos.component';


//servicio
import { Auth } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FirebaseService } from './services/firebase.service';

//routes
import { ROUTES_COMPONENT } from './app.routes';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { TareasComponent } from './components/dashboard/tareas/tareas.component';

//firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

//graficas
import { ChartsModule } from 'ng2-charts';
import { EstadisticosComponent } from './components/graficos/estadisticos/estadisticos.component';
import { TablasComponent } from './components/graficos/tablas/tablas.component';

export const firebaseConfig = {
    apiKey: "AIzaSyA-EI9UFmfTmKAGcNz6egdfjE2DhfLLG18",
    authDomain: "planisoftv1.firebaseapp.com",
    databaseURL: "https://planisoftv1.firebaseio.com",
    projectId: "planisoftv1",
    storageBucket: "planisoftv1.appspot.com",
    messagingSenderId: "293258911410"
};



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    GraficosComponent,
    ProyectosComponent,
    TareasComponent,
    EstadisticosComponent,
    TablasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    ROUTES_COMPONENT,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [Auth, AuthGuardService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
