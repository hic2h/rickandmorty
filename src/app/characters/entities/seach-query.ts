export interface SearchQuery {
  page?: number;
  name?: string;
  status?: CharacterStatus;
  species?: string;
  type?: string;
  gender?: CharacterGender;
}

export enum CharacterStatus {
  ALIVE = 'alive',
  DEAD = 'dead',
  UNKNOWN = 'unknown'
}

export enum CharacterGender {
  FEMALE = 'female',
  MALE = 'male',
  GENDERLESS = 'genderless',
  UNKNOWN = 'unknown'
}
