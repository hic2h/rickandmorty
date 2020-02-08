import { Injectable } from '@angular/core';
import {SearchQuery} from '../entities/seach-query';
import {Observable} from 'rxjs';
import {Characters} from '../entities/character';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  constructor(private apollo: Apollo) { }

  search(searchQuery: SearchQuery = {}): Observable<Characters> {
    const CurrentUserForProfile = gql`
      query searchCharacters($page: Int!, $filter: FilterCharacter!) {
        characters(page: $page, filter: $filter) {
          info {
            count,
            pages
          }
          results {
            name,
            id,
            status,
            image,
            created,
            species,
            gender,
            type,
            origin {
              name
            },
            location {
              name
            }
          }
        }
      }
    `;
    const page = searchQuery.page;
    const filter = {};
    Object.keys(searchQuery).forEach(key => {
      if (key !== 'page' && searchQuery[key]) {
        filter[key] = searchQuery[key];
      }
    });
    return this.apollo
      .watchQuery<{characters: Characters}>({
        query: CurrentUserForProfile,
        variables: { page, filter }
      })
      .valueChanges.pipe(
        map((queryResults) => {
          if (!queryResults.data || !queryResults.data.characters.results) {
            return {results: []} as Characters;
          }
          return queryResults.data.characters;
        })
      );
  }
}
