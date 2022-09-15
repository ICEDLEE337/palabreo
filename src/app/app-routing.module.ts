import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordComponent } from './components/word/word.component';
import { WordsComponent } from './components/words/words.component';
import { RouteParams } from './enums/route-params.enum';
const param = (segment: RouteParams) => `:${segment}`;
const routes: Routes = [
  {
    component: WordsComponent,
    path: `words`,
    pathMatch: 'full',
  },
  {
    component: WordComponent,
    path: `words/${param(RouteParams.WordId)}`,
    pathMatch: 'full',
  },
  {
    component: WordsComponent,
    path: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
