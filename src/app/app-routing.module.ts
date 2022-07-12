import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./test/test.component";
import { CardComponent } from "./card/card.component";
import { PageComponent } from "./page/page.component";
import { CardDetailsComponent } from "./card-details/card-details.component";

// STEP 1 : CREATE A LIST OF ROUTES CONSISTING OF COMPONENTS AND THEIR CORRESPONDING PATHS
const routes: Routes = [
  { path: "", redirectTo: "/card-list", pathMatch: "full" },
  { path: "test", component: TestComponent },
  { path: "card-list", component: CardComponent },
  { path: "card-list/:id/:name", component: CardDetailsComponent },
  { path: "card-list/:id", component: CardDetailsComponent },
  { path: "**", component: PageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// STEP 2 : CREATE A LIST OF ROUTING COMPONENT CONSISTING OF ALL COMPONENTS
export const routingComponents = [
  TestComponent,
  CardComponent,
  PageComponent,
  CardDetailsComponent
];
