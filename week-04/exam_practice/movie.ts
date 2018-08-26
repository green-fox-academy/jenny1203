export class Movie {
  private title: string;
  private year: string;
  private director: string;

  constructor(title: string, year: string, director: string){
    this.title = title;
    this.year = year;
    this.director = director;
  }

  public getYear():string {
    return this.year;
  }
}