import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterOverviewComponent } from './components/character-overview/character-overview.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {DateAgoPipe} from './pipes/date-ago.pipe';



@NgModule({
  declarations: [CharactersPageComponent, CharacterOverviewComponent, SearchComponent, DateAgoPipe],
  exports: [
    CharactersPageComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CharactersModule { }
