import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { CardComponent } from './components/card/card.component';
import { PaginateComponent } from './components/paginate/paginate.component';
import { ProgressComponent } from './components/progress/progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './pages/detail/detail.component';
import { ImageroundComponent } from './components/imageround/imageround.component';
import { DescriptionComponent } from './components/description/description.component';
import { BackbuttonComponent } from './components/backbutton/backbutton.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CardComponent,
    PaginateComponent,
    ProgressComponent,
    DetailComponent,
    ImageroundComponent,
    DescriptionComponent,
    BackbuttonComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
