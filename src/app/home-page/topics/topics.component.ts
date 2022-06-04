import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  topic = [
    {img: './assets/topics/art-history.png', title: $localize`:Courses category|Art category course:Art History`, quantity: 3},
    {img: './assets/topics/ui-ux.png', title:  $localize`:Courses category|UI & UX category course:UI & UX`, quantity: 16},
    {img: './assets/topics/3d-design.png', title: '3D Design', quantity: 4},
    {img: './assets/topics/media-pr.png', title: 'Media & PR', quantity: 9},
    {img: './assets/topics/programming.png', title: 'Programming', quantity: 2},
    {img: './assets/topics/music.png', title: 'Music', quantity: 6},
    {img: './assets/topics/language-courses.png', title: 'Language courses', quantity: 3},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
