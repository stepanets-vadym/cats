// * Base
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';

// * Common
import { NgIf } from '@angular/common';

// * NGRX
import { loadingSelect } from '../store/selectors';
import { Store } from '@ngrx/store';

// * Components
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';

const components = [HeaderComponent, FooterComponent];

// * Material
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ...components,
    MatProgressBarModule,
    MatCardModule,
    RouterOutlet,
    NgIf,
  ],
})
export default class BaseComponent {
  // * Injects
  private readonly store = inject(Store);
  // * Local
  protected loading: boolean = false;

  constructor() {
    this.changeLoadingSubscription();
  }

  // * Change loading subcription
  private changeLoadingSubscription() {
    this.store
      .select(loadingSelect)
      .pipe(takeUntilDestroyed())
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
