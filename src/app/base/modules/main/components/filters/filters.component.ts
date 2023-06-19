// * Base
import {
  ChangeDetectionStrategy,
  EventEmitter,
  Component,
  inject,
  Output,
  Input,
} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormConfig } from '../../../../../config/form.config';

// * Common
import { CommonModule } from '@angular/common';

// * Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

const material = [MatFormFieldModule, MatButtonModule, MatSelectModule];

// * Services
import FiltersService from './filters.service';

// * Types
import { TRequestSearchData } from '../../../../../types/base.types';
import { TFilterItem } from '../../../../../types/filters.types';

@Component({
  standalone: true,
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...material, CommonModule, FormsModule, ReactiveFormsModule],
})
export default class FiltersComponent extends FormConfig {
  // * Injects
  private readonly filtersService = inject(FiltersService);
  // * Outputs
  @Output() readonly formSubmitEvent = new EventEmitter<TFilterItem>();
  // * Inputs
  @Input({ required: true }) set data(data: TRequestSearchData) {
    if (data) {
      this.form.patchValue(data);
    }
  }
  // * Local
  protected readonly countList = [10, 25, 50, 100];

  get breedsList() {
    return this.filtersService.breedsList;
  }

  initForm() {
    this.form = this.fb.group({
      breed_ids: [''],
      limit: [10],
    });
  }

  protected submit() {
    this.formSubmitEvent.emit(this.form.value);
  }
}
