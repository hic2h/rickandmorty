export class Character {
  id: number;
  name: string;
  status: string;
  created: string;
  species: string;
  gender: string;
  type: string;
  origin: Location;
  location: Location;
  image: string;
  url: string;
}

export class Location {
  url: string;
  name: string;
}
export class Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export class Characters {
  info: Info;
  results: Character[];
}


