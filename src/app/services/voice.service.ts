import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoiceService {
  voices$$: BehaviorSubject<SpeechSynthesisVoice[]> = new BehaviorSubject([]) as any;
  voices$ = this.voices$$.asObservable();

  speak(voice: SpeechSynthesisVoice, text: string, lang: string, pitch?: number, rate?: number) {
    let speech = new globalThis.SpeechSynthesisUtterance();
    speech.lang = lang;
    speech.pitch = pitch || 1;
    speech.text = text;
    speech.rate = rate || 0.8;
    speech.voice = voice;
    globalThis.speechSynthesis.speak(speech);
  }

  constructor() {
    if (globalThis?.speechSynthesis) {
      globalThis.speechSynthesis.onvoiceschanged = () => {
        this.voices$$.next(globalThis?.speechSynthesis?.getVoices() || [])
      };
    } else {
      console.warn('Speech synthesis not available');
    }
  }
}
