import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from './marvel-api-service';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  imports: [
    NgForOf,
    FormsModule
  ],
  standalone: true
})
export class GridComponent implements OnInit {
  characters: any[] = [];
  filteredCharacters: any[] = [];
  searchQuery: string = '';
  charactersPerPage = 20;
  initialCharacters = 100;
  offset = 0;
  totalCharacters = 0;

  constructor(private marvelApiService: MarvelApiService) { }

  ngOnInit() {
    this.getPopularCharacters(this.offset, this.initialCharacters);
  }

  sortByComicCount(a: any, b: any) {
    return b.comics.available - a.comics.available;
  }

  getPopularCharacters(offset: number, limit: number) {
    this.marvelApiService.getCharacters(offset, limit, '-modified').subscribe((response) => {
      this.totalCharacters = response.data.total;
      this.characters = [...this.characters, ...response.data.results];
      this.characters.sort(this.sortByComicCount);
      this.filteredCharacters = this.characters;
    });
  }

  searchCharacters() {
    console.log('Search query:', this.searchQuery);

    this.filteredCharacters = this.characters.filter((character) =>
      character.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    console.log('Filtered characters:', this.filteredCharacters);
  }

  loadMoreCharacters() {
    if (this.offset + this.charactersPerPage < this.totalCharacters) {
      this.offset += this.charactersPerPage;
      this.getPopularCharacters(this.offset, this.charactersPerPage);
    }
  }

  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const clientHeight = event.target.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight * 0.9) {
      this.loadMoreCharacters();
    }
  }
}
