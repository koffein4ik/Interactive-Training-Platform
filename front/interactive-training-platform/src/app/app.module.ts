import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TrainingContentContainerComponent} from './components/training-content-container/training-content-container.component';
import {TextContentContainerComponent} from './components/text-content-container/text-content-container.component';
import {AudioContentContainerComponent} from './components/audio-content-container/audio-content-container.component';
import {VideoContentContainerComponent} from './components/video-content-container/video-content-container.component';
import {RadioButtonContentContainerComponent} from './components/radio-button-content-container/radio-button-content-container.component';
import {TrainingSlideComponent} from './components/training-slide/training-slide.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {AddNewCourseComponent} from './components/add-new-course/add-new-course.component';
import {LoginComponent} from './components/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {CourseContentComponent} from './components/course-content/course-content.component';
import {SafePipe} from "./pipes/safe-html.pipe";
import {ImageContentContainerComponent} from './components/image-content-container/image-content-container.component';
import {MatRadioModule} from "@angular/material/radio";
import {FooterComponent} from './components/footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import {AddNewLessonPopupComponent} from './components/add-new-lesson-popup/add-new-lesson-popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import {AddCourseContentPopupComponent} from './components/add-course-content-popup/add-course-content-popup.component';
import {MatSelectModule} from "@angular/material/select";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {APIInterceptor} from "./interceptors/api-interceptor";
import {FileUploadComponent} from './components/file-upload/file-upload.component';
import {CourseTestComponent} from './components/course-test/course-test.component';
import {AddCourseTestQuestionPopupComponent} from './components/add-course-test-question-popup/add-course-test-question-popup.component';
import {TestQuestionContainerComponent} from './components/test-question-container/test-question-container.component';
import {PercentsToPassPopupComponent} from './components/percents-to-pass-popup/percents-to-pass-popup.component';
import {AllCoursesComponent} from './components/all-courses/all-courses.component';
import {CourseCardComponent} from './components/course-card/course-card.component';
import {CourseFullDescriptionComponent} from './components/course-full-description/course-full-description.component';
import {MyCoursesComponent} from './components/my-courses/my-courses.component';
import {MyCreatedCoursesComponent} from './components/my-created-courses/my-created-courses.component';
import {CourseReviewsComponent} from './components/course-reviews/course-reviews.component';
import {CoursePageComponent} from './components/course-page/course-page.component';
import {MatTableModule} from "@angular/material/table";
import {CourseStatisticsComponent} from './components/coursestatistics/course-statistics.component';
import { AddModuleComponent } from './components/add-module/add-module.component';

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
    AddCourseContentPopupComponent,
    FileUploadComponent,
    CourseTestComponent,
    AddCourseTestQuestionPopupComponent,
    TestQuestionContainerComponent,
    PercentsToPassPopupComponent,
    AllCoursesComponent,
    CourseCardComponent,
    CourseFullDescriptionComponent,
    MyCoursesComponent,
    MyCreatedCoursesComponent,
    CourseReviewsComponent,
    CoursePageComponent,
    CourseStatisticsComponent,
    AddModuleComponent
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
    MatSelectModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [APIInterceptor, {
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
