import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-nav',
  templateUrl: './footer-nav.component.html',
})
export class FooterNavComponent implements OnInit {

  dateCopyRight = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
