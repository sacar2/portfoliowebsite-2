import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  resumeLink = "https://drive.google.com/file/d/0B2tlmUuJpXqOTWYxSFFWOXprMXM/view?usp=sharing";
  constructor() { }

  ngOnInit() {
  }

}
