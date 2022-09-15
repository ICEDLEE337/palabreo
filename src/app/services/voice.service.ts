import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoiceService {
  voices$$: BehaviorSubject<SpeechSynthesisVoice[]> = new BehaviorSubject([]) as any;
  voices$ = this.voices$$.asObservable();

  speak(voice: SpeechSynthesisVoice, text: string, pitch?: number, rate?: number) {
    let speech = new window.SpeechSynthesisUtterance();
    speech.lang = voice.lang;
    speech.pitch = pitch || 1;
    speech.text = text;
    speech.rate = rate || 0.8;
    speech.voice = voice;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
  }

  constructor(
    private readonly snackBar: MatSnackBar
  ) {
    if (window?.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.voices$$.next(window?.speechSynthesis?.getVoices() || [])
      };
    } else {
      this.snackBar.open('Speech synthesis not available');
    }
  }
}
