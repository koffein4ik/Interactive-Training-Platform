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
import { ImageContentContainerComponent } from './components/image-content-container/image-content-container.component';
import {MatRadioModule} from "@angular/material/radio";
import { FooterComponent } from './components/footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import { AddNewLessonPopupComponent } from './components/add-new-lesson-popup/add-new-lesson-popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AddCourseContentPopupComponent } from './components/add-course-content-popup/add-course-content-popup.component';
import {MatSelectModule} from "@angular/material/select";

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
    ImageContentContainerComponent,
    FooterComponent,
    AddNewLessonPopupComponent,
    AddCourseContentPopupComponent
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
    MatRadioModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
