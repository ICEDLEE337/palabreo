import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { RouteParams } from 'src/app/enums/route-params.enum';
import { WordRepository } from 'src/app/repositories/word-repository';
import { VoiceService } from 'src/app/services/voice.service';
import { IWord } from 'src/app/types/word.interface';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  word$!: Observable<IWord>;
  voices$ = this.voiceSvc.voices$;

  constructor(
    private voiceSvc: VoiceService,
    private readonly route: ActivatedRoute,
    private readonly wordRepository: WordRepository) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params[RouteParams.WordId];
    this.word$ = this.wordRepository.get$(id);
  }

  play(word: string | undefined, lang: string) {
    this.voices$.pipe(
      map(voices => voices.filter(v => v.lang === lang)),
      map(voices => voices[lang === 'en-US' ? 2 : 0] ?? voices[0]),
      tap(v => this.voiceSvc.speak(v, word ?? 'blah'))
    )
      .subscribe();
  }

}
