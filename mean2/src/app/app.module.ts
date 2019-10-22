import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatExpansionModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent} from './posts/post-create/post-create.component';
import { HeaderCreateComponent} from './header/header-create.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PostListComponent } from './posts/post-list/post-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderCreateComponent,
    MainNavComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
