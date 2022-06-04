import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showLocaleList = false

  localeList = [
    {code: 'en-Us', label: 'English', shortcut: 'en'},
    {code: 'he-IL', label: 'עִברִית', shortcut: 'he'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleLocaleList(showLocaleList: boolean): void {
    this.showLocaleList = !showLocaleList
  }
}
