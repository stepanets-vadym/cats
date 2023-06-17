// * Base
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';

// * Common
import { NgIf } from '@angular/common';

// * Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const material = [
  MatToolbarModule,
  MatTooltipModule,
  MatButtonModule,
  MatIconModule,
];

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...material, NgIf],
})
export default class FooterComponent {
  // * Inputs
  @Input({ required: true }) tabletMode: boolean = false;
  // * Local
  protected nowYear = new Date().getFullYear().toString();
}
