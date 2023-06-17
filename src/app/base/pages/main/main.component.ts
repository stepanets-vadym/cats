// * Base
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// * Common
import { NgFor, NgIf } from '@angular/common';

// * Material
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

const material = [
  MatPaginatorModule,
  MatCheckboxModule,
  MatDividerModule,
  MatTooltipModule,
  MatButtonModule,
  MatTableModule,
  MatCardModule,
];

// * Types
import { TCatsListResponse } from 'src/app/types/base.types';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...material, NgFor, NgIf],
})
export default class MainComponent {
  // * Inputs
  @Input({ required: true }) catListResolve: TCatsListResponse[] = [];

  // * Local
  readonly tableColumns = ['img', 'breeds', 'categories'];

}
