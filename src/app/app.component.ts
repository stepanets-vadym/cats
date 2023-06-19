// * Base
import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AppComponent {}
