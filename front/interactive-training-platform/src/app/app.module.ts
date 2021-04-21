import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingContentContainerComponent } from './components/training-content-container/training-content-container.component';
import { TextContentContainerComponent } from './components/text-content-container/text-content-container.component';
import { AudioContentContainerComponent } from './components/audio-content-container/audio-content-container.component';
import { VideoContentContainerComponent } from './components/video-content-container/video-content-container.component';
import { RadioButtonContentContainerComponent } from './components/radio-button-content-container/radio-button-content-container.component';
import { TrainingSlideComponent } from './components/training-slide/training-slide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddNewCourseComponent } from './components/add-new-course/add-new-course.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import { CourseContentComponent } from './components/course-content/course-content.component';
import {SafePipe} from "./pipes/safe-html.pipe";
import {NgxAudioPlayerModule} from "ngx-audio-player";
import { ImageContentContainerComponent } from './components/image-content-container/image-content-container.component';
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    TrainingContentContainerComponent,
    TextContentContainerComponent,
    AudioContentContainerComponent,
    VideoContentContainerComponent,
    RadioButtonContentContainerComponent,
    TrainingSlideComponent,
    HeaderComponent,
    RegistrationComponent,
    AddNewCourseComponent,
    LoginComponent,
    CourseContentComponent,
    ImageContentContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    NgxAudioPlayerModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
