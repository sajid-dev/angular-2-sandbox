import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';

import {StringInterploationComponent} from './string-interploation/string-interploation.component';
import {PropertyBindingComponent} from './property-binding/property-binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {HomePageComponent} from './home-page/home-page.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'a2sip', component: StringInterploationComponent},
  {path: 'a2pb', component: PropertyBindingComponent},
  {path: 'a2evb', component: EventBindingComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    StringInterploationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
