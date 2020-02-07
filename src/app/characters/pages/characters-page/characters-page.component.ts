import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {CharactersApiService} from '../../services/characters-api.service';
import {Observable, Subject, Subscription} from 'rxjs';
import {Characters} from '../../entities/character';
import {SearchQuery} from '../../entities/seach-query';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersPageComponent implements OnInit, OnDestroy {
  characters$: Observable<Characters>;
  searchQuery: SearchQuery;
  searchQuery$: Subscription;
  constructor(private charactersApi: CharactersApiService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.characters$ = this.route.queryParams.pipe(
      map(params => this.searchQuery = params),
      switchMap(params => this.charactersApi.search(params))
    );
  }

  onSeach(searchQuery: SearchQuery) {
    this.searchQuery = searchQuery;
    this.router.navigate(['/'], { queryParams: this.searchQuery });
  }

  setCurrentPage(page: number) {
    this.onSeach({...this.searchQuery, ...{page}})
  }

  ngOnDestroy() {
    this.searchQuery$.unsubscribe();
  }


}
