import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { AttorneysComponent } from './attorneys/attorneys.component';
import { ResourceCenterComponent } from './resource-center/resource-center.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { ClipPathComponent } from './clip-path/clip-path.component';
import { DescriptionComponent } from './description/description.component';
import { SliderComponent } from './slider/slider.component';

const appRoutes: Routes = [
    { path: 'about-us', component: AboutUsComponent },
    { path: 'practice-areas', component: PracticeAreasComponent },
    { path: 'attorneys', component: AttorneysComponent },
    { path: 'resource-center', component: ResourceCenterComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: '',   redirectTo: '/about-us', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    PracticeAreasComponent,
    AttorneysComponent,
    ResourceCenterComponent,
    ContactUsComponent,
    WallpaperComponent,
    ClipPathComponent,
    DescriptionComponent,
    SliderComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
