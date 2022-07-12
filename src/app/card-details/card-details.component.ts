import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./card-details.component.html",
  styleUrls: ["./card-details.component.css"]
})
export class CardDetailsComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  component = "Card Details Component";
  public cardId;
  user: { id: number; name: string };

  // FOR ACTIVE ROUTE :
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    };

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get("id"));
      this.cardId = id;
    });
  }

  goPrevious() {
    let previousId = this.cardId - 1;
    // this.router.navigate(["/card", previousId]);
    this.router.navigate(["../", previousId], { relativeTo: this.route });
  }
  goNext() {
    let nextId = this.cardId + 1;
    // this.router.navigate(["/card", nextId]);
    this.router.navigate(["../", nextId], { relativeTo: this.route });
  }

  goBack() {
    let selectId = this.cardId ? this.cardId : null;
    // this.router.navigate(["/card", { id: selectId }]);
    this.router.navigate(["../", { id: selectId }], { relativeTo: this.route });
  }
}
