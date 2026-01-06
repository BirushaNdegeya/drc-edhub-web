import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

interface Journal {
  id: number;
  title: string;
  description: string;
  category: string;
  year: number;
  fileSize: string;
  downloadUrl: string;
}

@Component({
  selector: 'app-journals',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './journals.component.html',
  styleUrl: './journals.component.css'
})
export class JournalsComponent {
  selectedFilter = signal<string>('Tous');
  searchTerm = signal<string>('');

  journals: Journal[] = [
    {
      id: 1,
      title: "Examen d'État 2024 - Mathématiques",
      description: "Épreuve officielle de mathématiques pour l'examen d'état 2024",
      category: "Mathématiques",
      year: 2024,
      fileSize: "2.4 MB",
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "Examen d'État 2024 - Français",
      description: "Épreuve officielle de français pour l'examen d'état 2024",
      category: "Français",
      year: 2024,
      fileSize: "1.8 MB",
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Examen d'État 2024 - Sciences Physiques",
      description: "Épreuve officielle de sciences physiques pour l'examen d'état 2024",
      category: "Sciences",
      year: 2024,
      fileSize: "3.1 MB",
      downloadUrl: "#",
    },
    {
      id: 4,
      title: "Examen d'État 2023 - Mathématiques",
      description: "Épreuve officielle de mathématiques pour l'examen d'état 2023",
      category: "Mathématiques",
      year: 2023,
      fileSize: "2.2 MB",
      downloadUrl: "#",
    },
    {
      id: 5,
      title: "Examen d'État 2023 - Histoire-Géographie",
      description: "Épreuve officielle d'histoire-géographie pour l'examen d'état 2023",
      category: "Histoire-Géo",
      year: 2023,
      fileSize: "1.5 MB",
      downloadUrl: "#",
    },
    {
      id: 6,
      title: "Examen d'État 2023 - Biologie",
      description: "Épreuve officielle de biologie pour l'examen d'état 2023",
      category: "Sciences",
      year: 2023,
      fileSize: "2.8 MB",
      downloadUrl: "#",
    },
  ];

  filters = ['Tous', '2024', '2023', 'Mathématiques', 'Français', 'Sciences'];

  get filteredJournals() {
    const filter = this.selectedFilter();
    const term = this.searchTerm().trim().toLowerCase();

    // Start with filter-by-button if set
    let results = this.journals;
    if (filter !== 'Tous') {
      results = results.filter(j => j.category === filter || j.year.toString() === filter);
    }

    // If no search term, return based on selected filter
    if (!term) return results;

    // If the user typed a year range like "2010-2011", parse and filter by range
    const rangeMatch = term.match(/(\d{4})\s*-\s*(\d{4})/);
    if (rangeMatch) {
      const y1 = parseInt(rangeMatch[1], 10);
      const y2 = parseInt(rangeMatch[2], 10);
      const min = Math.min(y1, y2);
      const max = Math.max(y1, y2);
      return results.filter(j => j.year >= min && j.year <= max);
    }

    // If the user typed a single year like "2024", filter by that year
    const yearMatch = term.match(/\b(\d{4})\b/);
    if (yearMatch) {
      const y = parseInt(yearMatch[1], 10);
      return results.filter(j => j.year === y);
    }

    // Otherwise do a text search against title, description and category
    return results.filter(j =>
      j.title.toLowerCase().includes(term) ||
      j.description.toLowerCase().includes(term) ||
      j.category.toLowerCase().includes(term) ||
      j.fileSize.toLowerCase().includes(term)
    );
  }

  downloadJournal(journal: Journal) {
    // Mock download
    console.log('Downloading:', journal.title);
  }

  onSearch(value: string) {
    this.searchTerm.set(value || '');
  }
}