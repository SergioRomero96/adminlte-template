import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AgmCoreModule} from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { ContentComponent } from './components/shared/content/content.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SettingComponent } from './components/shared/setting/setting.component';
import { BusinessListComponent } from './components/business-management/business-list/business-list.component';
import { BusinessAddComponent } from './components/business-management/business-add/business-add.component';
import { BusinessPlaceAddComponent } from './components/business-place-management/business-place-add/business-place-add.component';
import { BusinessPlaceListComponent } from './components/business-place-management/business-place-list/business-place-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettingComponent,
    BusinessListComponent,
    BusinessAddComponent,
    BusinessPlaceAddComponent,
    BusinessPlaceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAz6wxbUFHLDcHNPCVIUj8ysXhAA1j-dQ4',
      libraries:['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
