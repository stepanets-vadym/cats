// * Base
import {
  ReactiveFormsModule,
  FormBuilder,
  FormsModule,
  FormGroup,
} from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';

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
import { TFilterItem } from '../../../types/filters.types';

@Component({
  standalone: true,
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FiltersService],
  imports: [...material, CommonModule, FormsModule, ReactiveFormsModule],
})
export default class FiltersComponent {
  // * Injects
  private readonly filtersService = inject(FiltersService);
  private readonly fb = inject(FormBuilder);
  // * Outputs
  @Output() readonly formValuesEvent = new EventEmitter<TFilterItem>();
  // * Inputs
  // TODO
  @Input({ required: true }) set data(data: any) {
    if (data) {
      this.form.patchValue(data);
    }
  }
  // * Local
  // TODO
  protected breedsList: any[] = [
    {
      name: 'Усі',
      value: '',
    },
  ];
  protected form!: FormGroup;
  protected readonly countList = [10, 25, 50, 100] as const;

  constructor() {
    this.getBreedList();
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      breeds: [''],
      limit: [this.countList[0]],
    });
  }

  protected getBreedList() {
    this.filtersService.getBreeds().subscribe((response) => {
      this.breedsList = [...this.breedsList, ...response];
    });
  }

  protected submit() {
    this.formValuesEvent.emit(this.form.value);
  }
}
