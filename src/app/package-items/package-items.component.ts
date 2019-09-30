import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-items',
  templateUrl: './package-items.component.html',
  styleUrls: ['./package-items.component.css'],
  inputs: ['package']
})
export class PackageItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
