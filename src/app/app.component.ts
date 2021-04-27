import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

/**
 * Sample Table Updating Project
 */
export class AppComponent implements OnInit {
  dataTableSubscription: Subscription;
  limit = 10;
  offset = 10;
  name;
  department;
  duration;
  tableData: any = [];

  ngOnInit() {
    this.getData();
  }

  addData() {
    this.tableData.push({
      name: this.name,
      department: this.department,
      duration: this.duration
    });
  }

  getData() {
    this.tableData.push({
      name: "Gopi",
      department: "CSE",
      duration: "12hr"
    });
  }
}
