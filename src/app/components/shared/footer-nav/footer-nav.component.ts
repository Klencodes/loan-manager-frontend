import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-nav',
  templateUrl: './footer-nav.component.html',
})
export class FooterNavComponent implements OnInit {

  dateCopyright = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
