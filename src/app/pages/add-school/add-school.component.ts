import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-school',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, MatCardModule],
  templateUrl: './add-school.component.html',
  styleUrl: './add-school.component.css'
})
export class AddSchoolComponent {
}
