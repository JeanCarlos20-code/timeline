import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TimelinePrincipalComponent } from './pages/timeline-principal/timeline-principal.component';

import { FormsModule } from '@angular/forms';
import { BlockTimelineComponent } from './block-timeline/block-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinePrincipalComponent,
    BlockTimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
