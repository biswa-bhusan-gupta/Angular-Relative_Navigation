import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  //STEP 4 : CREATE A NAVIGATION BAR FOR ROUTING COMPONENTS
  template: `<div>
    <h1>
      {{ component }}
    </h1>
    <nav>
      <a routerLink="/test" routerLinkActive="active">Test</a>
      <br />
      <a routerLink="/card-list" routerLinkActive="active">Card</a>
    </nav>
    <router-outlet></router-outlet>
  </div> `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  component = "App Component";
}
