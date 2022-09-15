import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {
  @Input() lang!: string;
  imgSrc!: string;

  constructor() { }

  ngOnInit(): void {
    this.imgSrc = `/assets/${this.lang}-flag.gif`;
  }

}
