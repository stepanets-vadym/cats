// * Base
import {
  ChangeDetectionStrategy,
  ElementRef,
  Component,
  ViewChild,
  inject,
  signal,
  Input,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgScrollbar, NgScrollbarModule } from 'ngx-scrollbar';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

// * Common
import { NgFor, NgIf } from '@angular/common';

// * NGRX
import { toggleLoading } from '../../../store/base/base.actions';
import { Store } from '@ngrx/store';

// * Components
import FiltersComponent from './components/filters/filters.component';

// * Services
import MainService from './main.service';

// * Material
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const material = [
  MatPaginatorModule,
  MatDividerModule,
  MatTooltipModule,
  MatButtonModule,
  MatCardModule,
];

// * Types
import {
  TCatsListResponse,
  TQueryParams,
  TRequestSearchData,
} from '../../../types/base.types';
import { EBreakpoints } from '../../../types/breakpoints.types';
import { TFilterItem } from '../../../types/filters.types';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...material, NgFor, NgIf, NgScrollbarModule, FiltersComponent],
})
export default class MainComponent {
  // * Injects
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly mainService = inject(MainService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly store = inject(Store);
  // * Inputs
  @Input({ required: true }) set catListResolve(data: TCatsListResponse[]) {
    if (data) {
      this.readData(data);
    }
  }
  // * View childs
  @ViewChild('filters', { static: false })
  protected readonly filters?: ElementRef;
  @ViewChild(NgScrollbar) scrollable?: NgScrollbar;
  // * Local
  protected updateQueryParams: TRequestSearchData = {};
  protected list = signal<TCatsListResponse[]>([]);
  protected readonly tabletMode = signal(false);
  protected firstContentLoaded: boolean = false;
  protected isFiltersOpen: boolean = false;

  constructor() {
    this.queryParamsSubscription();
    this.breakpointSubscription();
  }

  // * Toogle filter
  protected toggleFilter() {
    if (this.tabletMode()) {
      this.scrollToFilters();
    }
    this.isFiltersOpen = !this.isFiltersOpen;
  }

  // * Get filter values
  protected getFilterValues(data: Readonly<TFilterItem>) {
    this.addQueryParams({
      ...this.updateQueryParams,
      ...data,
    });

    if (this.tabletMode()) {
      this.isFiltersOpen = false;
    }
  }

  // * Get queryParams
  private queryParamsSubscription() {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe((params: Readonly<TQueryParams>) => {
        this.updateQueryParams.breed_ids = params.breed_ids
          ? params.breed_ids
          : '';

        if (params.limit) {
          this.updateQueryParams.limit = params.limit ? +params.limit : 10;
        }

        if (this.firstContentLoaded) {
          this.loadData();
        }

        this.firstContentLoaded = true;
      });
  }

  // * Load data list
  private loadData() {
    this.mainService
      .search({ ...this.updateQueryParams })
      .subscribe((response) => this.readData(response));
  }

  private breakpointSubscription() {
    this.breakpointObserver
      .observe([EBreakpoints.TABLET])
      .pipe(takeUntilDestroyed())
      .subscribe((result) =>
        this.tabletMode.set(result.breakpoints[EBreakpoints.TABLET])
      );
  }

  private readData(response: TCatsListResponse[]) {
    this.list.set(response);
    this.toggleLoading(false);
  }

  private toggleLoading(payload: Readonly<boolean>) {
    this.store.dispatch(toggleLoading({ payload }));
  }

  private addQueryParams(queryParams: Readonly<TRequestSearchData>) {
    this.updateQueryParams = { ...queryParams };
    this.router.navigate(['/'], {
      queryParams: this.updateQueryParams,
    });
  }

  // * Scroll to filters
  private scrollToFilters() {
    if (this.filters) {
      this.scrollable?.scrollToElement(this.filters);
    }
  }
}
