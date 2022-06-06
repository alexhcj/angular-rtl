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
    {img: './assets/topics/3d-design.png', title: $localize`:Courses category|3D Design category course:3D Design`, quantity: 4},
    {img: './assets/topics/media-pr.png', title: $localize`:Courses category|Media & PR category course:Media & PR`, quantity: 9},
    {img: './assets/topics/programming.png', title: $localize`:Courses category|Programming category course:Programming`, quantity: 2},
    {img: './assets/topics/music.png', title: $localize`:Courses category|Music category course:Music`, quantity: 6},
    {img: './assets/topics/language-courses.png', title: $localize`:Courses category|Language courses category course:Language courses`, quantity: 3},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
