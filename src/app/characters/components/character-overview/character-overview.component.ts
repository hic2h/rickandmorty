import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../entities/character';

@Component({
  selector: 'app-character-overview',
  templateUrl: './character-overview.component.html',
  styleUrls: ['./character-overview.component.scss']
})
export class CharacterOverviewComponent implements OnInit {
  @Input() character: Character = new Character();
  constructor() { }

  ngOnInit(): void {
  }

}
