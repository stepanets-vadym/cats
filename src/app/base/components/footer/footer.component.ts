// * Base
import { ChangeDetectionStrategy, Component } from '@angular/core';

// * Common
import { NgIf } from '@angular/common';

// * Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const material = [MatToolbarModule, MatTooltipModule];

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...material, NgIf],
})
export default class FooterComponent {
  // * Local
  protected nowYear = new Date().getFullYear().toString();
}
