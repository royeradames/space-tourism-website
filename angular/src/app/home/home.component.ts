import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "SO, YOU WANT TO TRAVEL TO"
  titleSpan = "SPACE"
  message= `Let’s face it; if you want to go to space, you might as well genuinely go to
    outer space and not hover kind of on the edge of it. Well sit back, and
    relax because we’ll give you a truly out of this world experience!`
  action = "EXPLORE"
  getAction() {
    return this.action
  }
}
