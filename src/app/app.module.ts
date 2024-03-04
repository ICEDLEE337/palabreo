import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordComponent } from './components/word/word.component';
import { WordsComponent } from './components/words/words.component';
import { FlagComponent } from './components/flag/flag.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavComponent,
    WordComponent,
    WordsComponent,
    FlagComponent,
  ],
  imports: [
    MatCardModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    MatButtonModule,
    MatInputModule,
    LayoutModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
