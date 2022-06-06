import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PersistenceService} from "../../services/persistence.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  currentLocale = ''
  localesList = [
    {code: 'en', label: 'English'},
    {code: 'he', label: 'עִברִית'},
  ]
  showLocaleList = false

  constructor(private persistenceService: PersistenceService) { }

  ngOnInit(): void {
    this.currentLocale = this.persistenceService.get('locale')
  }

  toggleLocaleList(showLocaleList: boolean): void {
    this.showLocaleList = !showLocaleList
  }

  selectLocale(code: string): void {
    if (code === this.currentLocale) return
    this.currentLocale = code
    this.persistenceService.set('locale', code)
    this.toggleLocaleList(this.showLocaleList)
  }
}
