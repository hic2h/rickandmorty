import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SearchQuery} from '../../entities/seach-query';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() searchQuery: SearchQuery = {};
  @Output() search: EventEmitter<SearchQuery> = new EventEmitter<SearchQuery>();
  searchForm: FormGroup;
  hideMoreFilters = true;

  toggleMoreFilters(): void {
    this.hideMoreFilters = !this.hideMoreFilters;
  }

  resetForm(): void {
    this.searchForm.reset();
  }
  submitForm(): void {
    this.search.emit(this.searchForm.value);
  }

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    const { searchQuery } = changes;
    if (searchQuery.currentValue) {
      /**
       * Postpone the patchValue() function call to the last of queue,
       * to make sure onInit is being called before
       */
      setTimeout(() => this.searchForm.patchValue(searchQuery.currentValue), 0)
    }
  }
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      name: null,
      species: null,
      type: null,
      status: null,
      gender: null
    });
  }

}
