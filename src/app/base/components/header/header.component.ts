// * Base
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  inject,
  Input,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';

// * Common
import { NgIf } from '@angular/common';

// * RXJS
import { map } from 'rxjs/operators';

// * NGRX

// * Components

// * Material
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

const material = [
  MatBottomSheetModule,
  MatToolbarModule,
  MatTooltipModule,
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
];

// * Types

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...material, NgIf, RouterModule],
})
export default class HeaderComponent {
  // * Injects
  private readonly matBottomSheet = inject(MatBottomSheet);

  // * Inputs
  @Input({ required: true }) screenMode: boolean = false;
  @Input({ required: true }) tabletMode: boolean = false;
}
