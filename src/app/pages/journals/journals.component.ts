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
    if (filter === 'Tous') {
      return this.journals;
    }
    return this.journals.filter(j => 
      j.category === filter || j.year.toString() === filter
    );
  }

  downloadJournal(journal: Journal) {
    // Mock download
    console.log('Downloading:', journal.title);
  }
}