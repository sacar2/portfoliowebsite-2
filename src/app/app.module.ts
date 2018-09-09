import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelinHeadingComponent } from './selin-heading/selin-heading.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SocialsComponent } from './socials/socials.component';
import { ProjectHighlightsComponent } from './project-highlights/project-highlights.component';
import { ProjectTileComponent } from './project-tile/project-tile.component';
import { ProjectCollectionComponent } from './project-collection/project-collection.component';
import { FiltersComponent } from './filters/filters.component';
import { SecondaryNavComponent } from './secondary-nav/secondary-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SelinHeadingComponent,
    MainNavComponent,
    AboutComponent,
    MainComponent,
    FooterComponent,
    SocialsComponent,
    ProjectHighlightsComponent,
    ProjectTileComponent,
    ProjectCollectionComponent,
    FiltersComponent,
    SecondaryNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
