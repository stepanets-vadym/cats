// * Base
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup } from '@angular/forms';
import { inject, Injectable } from '@angular/core';

// * NGRX
import { toggleLoading } from '../store/base/base.actions';
import { loadingSelect } from '../store/selectors';

// * Types
import { Store } from '@ngrx/store';

@Injectable()
export abstract class FormConfig {
  // * Injects
  protected readonly fb = inject(FormBuilder);
  protected readonly store = inject(Store);
  // * Base
  protected form!: FormGroup;
  // * Local
  protected loading: boolean = false;

  constructor() {
    this.initForm();
    this.changeLoadingSubscription();
  }

  // ! Required methods
  protected abstract initForm(): void;
  protected abstract submit(form?: FormGroup): void;

  toggleLoading(payload: Readonly<boolean>) {
    this.store.dispatch(toggleLoading({ payload }));
  }

  // * Change loading subcription
  private changeLoadingSubscription() {
    this.store
      .select(loadingSelect)
      .pipe(takeUntilDestroyed())
      .subscribe((loading) => {
        loading ? this.form.disable() : this.form.enable();

        this.loading = loading;
      });
  }
}

// * FOR INCLUDE:
// #1 class exampleClassName extends FormConfig (before "implements")
// #2 You need to add methods: "initForm" & "submit"
