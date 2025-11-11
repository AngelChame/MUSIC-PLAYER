import { Component, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  title = 'Music Player';
searchQuery: string = '';
  searchResults: any[] = [];
  private debounceTimer: any;

  constructor(private router: Router) {}


  onSearchDebounced() {
    clearTimeout(this.debounceTimer);


    this.debounceTimer = setTimeout(() => {
      if (this.searchQuery.trim() !== '') {
        this.onSearch();
      } else {
        this.searchResults = []; // Limpia resultados si el campo está vacío
      }
    }, 400);
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { q: this.searchQuery }
      });
    }
  }

  backToHome(): void {
    this.router.navigate(['/']);
    this.searchQuery = '';
  }

  isSearchRoute(): boolean {
    return this.router.url.includes('/search');
  }
}
