// * Base
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// * NGRX
import { loadingSelect } from './store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AppComponent {
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
