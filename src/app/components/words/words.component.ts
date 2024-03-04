import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { WordRepository } from 'src/app/repositories/word-repository';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html'
})
export class WordsComponent implements OnInit {
  words$ = this.wordRepo.list$();

  constructor(private readonly wordRepo: WordRepository) { }

  ngOnInit(): void {

  }

}
