import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-card",
  template: `<h3>{{ component }}</h3>
    <h4>Card List</h4>
    <ul class="items">
      <li
        (click)="onSelect(i)"
        [class.selected]="isSelected(i)"
        *ngFor="let i of cards"
      >
        <span class="badge">{{ i.id }}</span
        >{{ i.name }}
      </li>
    </ul> `,
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  component = "Card Component";

  // FOR ACTIVE ROUTE :
  public selectedId;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get("id"));
      this.selectedId = id;
    });
  }

  cards = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Node" },
    { id: 3, name: "MongoDB" },
    { id: 4, name: "Ruby" },
    { id: 5, name: "Bootstrap" }
  ];

  // FOR ROUTER NAVIGATION
  onSelect(x) {
    // this.router.navigate(["/card", x.id]);
    this.router.navigate([x.id], { relativeTo: this.route });
  }

  isSelected(card) {
    return card.id === this.selectedId;
  }
}
