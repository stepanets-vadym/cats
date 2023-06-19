// * Base
import { ChangeDetectionStrategy, Component } from '@angular/core';

// * Material
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatToolbarModule],
})
export default class HeaderComponent {}
