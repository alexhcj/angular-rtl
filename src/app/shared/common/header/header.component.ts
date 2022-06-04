import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  localeList = [
    {code: 'en-Us', label: 'English', shortcut: 'en'},
    {code: 'he-IL', label: 'עִברִית', shortcut: 'he'},
  ]
  showLocaleList = false
  currentLanguage = this.localeList[0].shortcut

  constructor() { }

  ngOnInit(): void {
  }

  toggleLocaleList(showLocaleList: boolean): void {
    this.showLocaleList = !showLocaleList
  }
}
