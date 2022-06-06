import {Component, OnInit} from '@angular/core';
import {PersistenceService} from "./shared/services/persistence.service";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private persistenceService: PersistenceService) {}

  ngOnInit(): void {
    this.persistenceService.set('locale', 'en')
  }
}
