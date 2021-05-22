import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-card-form',
  templateUrl: './app-card-form.component.html',
  styleUrls: ['./app-card-form.component.css']
})
export class AppCardFormComponent implements OnInit {

  @Input() appCardForm: any = {
    id: null,
    name: null,
    appIconPath: null,
    appLinkUrl: null
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
