import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AppRoutingModule, routingComponents } from "./app-routing.module";

// STEP 3 : IMPORT APP ROUTING MODULE AND ROUTING COMPONENTS
@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
