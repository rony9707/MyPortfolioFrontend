import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule  } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HomeModule,
    HttpClientModule,
    MatSliderModule,
    MatProgressBarModule,
    DragDropModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
