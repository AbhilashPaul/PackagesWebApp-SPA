import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PackageItemsComponent } from './package-items/package-items.component';
import { SearchPackagesPipe } from './search-packages.pipe';
import { PackageDetailsComponent } from './package-details/package-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageItemsComponent,
    SearchPackagesPipe,
    PackageDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
