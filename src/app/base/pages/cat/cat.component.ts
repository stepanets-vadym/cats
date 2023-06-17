import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatComponent {

}
