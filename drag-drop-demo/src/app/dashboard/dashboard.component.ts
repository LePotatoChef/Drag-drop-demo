import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, CdkDragStart, CdkDropList, CdkDropListGroup} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  breakpoint: any;

  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  // onResize(event) {
  //   this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  // }

  appCards = [
    {
      id: 1,
      order:0,
      name: "amazon",
      appIconPath: '../../assets/icons/amazon.svg',
      appLinkUrl: 'www.amazon.com'
    },
    {
      id: 2,
      order:1,
      name: "netflix",
      appIconPath: '../../assets/icons/netflix.png',
      appLinkUrl: 'www.netflix.com'
    },
    {
      id: 3,
      order:2,
      name: "dropbox",
      appIconPath: '../../assets/icons/dropbox.png',
      appLinkUrl: 'www.dropbox.com'
    },
    {
      id: 4,
      order:3,
      name: "google",
      appIconPath: '../../assets/icons/google.png',
      appLinkUrl: 'www.netflix.com'
    },
    {
      id: 5,
      order:4,
      name: "microsoft",
      appIconPath: '../../assets/icons/microsoft.png',
      appLinkUrl: 'www.microsoft.com'
    },
    {
      id: 6,
      order:5,
      name: "apple",
      appIconPath: '../../assets/icons/apple.svg',
      appLinkUrl: 'www.apple.com'
    },
    {
      id: 7,
      order:6,
      name: "github",
      appIconPath: '../../assets/icons/github.svg',
      appLinkUrl: 'www.github.com'
    }
  ];


  public dragging: boolean = false;

  drop(event: CdkDragDrop<number>): void {
    moveItemInArray(
      this.appCards,
      event.previousContainer.data,
      event.container.data
    );
    console.log(this.appCards)
  }

  public handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
  }

  public handleClick(event: MouseEvent, appLinkUrl: string): void {
    if (this.dragging) {
      this.dragging = false;
      return
    }
    let url: string = '';
    if (!/^http[s]?:\/\//.test(appLinkUrl)) {
        url += 'http://';
    }
    url += appLinkUrl;
    window.open(url, '_blank');
  }

}
