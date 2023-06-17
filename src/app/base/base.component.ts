// * Base
import {
  Component,
  ChangeDetectionStrategy,
  inject,
  ViewChild,
  ViewContainerRef,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { RouterOutlet } from '@angular/router';

// * Common
import { NgIf } from '@angular/common';

// * NGRX
// import { Store } from '@ngrx/store';

// * Components
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';

const components = [HeaderComponent, FooterComponent];

// * Material
import { MatCardModule } from '@angular/material/card';

// * Types
import { EBreakpoints } from '../types/breakpoints.types';

@Component({
  standalone: true,
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...components, RouterOutlet, NgIf, MatCardModule],
})
export default class BaseComponent {
  // * Injects
  private readonly breakpointObserver = inject(BreakpointObserver);
  // private readonly store = inject(Store);
  // * Modes
  protected readonly screenMode = signal(false);
  protected readonly tabletMode = signal(false);

  // * Local
  protected readonly isShowAnimations = signal(false);
  protected readonly isAuth = signal(false);

  constructor() {
    this.breakpointSubscription();
  }

  protected prepareRouteTransition(outlet: RouterOutlet) {
    const data = outlet && (outlet.activatedRouteData as { animation: string });
    return data.animation;
  }

  private breakpointSubscription() {
    this.breakpointObserver
      .observe([EBreakpoints.TABLET, EBreakpoints.SCREEN])
      .pipe(takeUntilDestroyed())
      .subscribe((result) => {
        this.tabletMode.set(result.breakpoints[EBreakpoints.TABLET]);
        this.screenMode.set(result.breakpoints[EBreakpoints.SCREEN]);
      });
  }
}
