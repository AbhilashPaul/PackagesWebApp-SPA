import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css'],
  inputs: ['package']
})
export class PackageDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
