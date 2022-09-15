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
    const handler = (e: any) => this.snackBar.open(e?.detail || e?.message || Object.keys(e).sort().join(', '))

    const utterance = new window.SpeechSynthesisUtterance();
    // utterance.onstart = handler
    // utterance.onend = handler
    utterance.onerror = handler

    // SSML markup is rarely supported
    // See: https://www.w3.org/TR/speech-synthesis/
    // utterance.onmark = handler

    // word boundaries are supported by
    // Safari MacOS and on windows but
    // not on Linux and Android browsers
    // utterance.onboundary = handler

    // not supported / fired
    // on many browsers somehow
    // utterance.onpause = handler
    // utterance.onresume = handler
    utterance.lang = voice.lang;
    utterance.pitch = pitch || 1;
    utterance.text = text;
    utterance.rate = rate || 0.8;
    utterance.voice = voice;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
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
