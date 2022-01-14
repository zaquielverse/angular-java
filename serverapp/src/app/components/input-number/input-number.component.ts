import { Component } from '@angular/core';
import { ICellRendererParams } from '@ag-grid-community/all-modules';
import { AgRendererComponent } from '@ag-grid-community/angular';

@Component({
  selector: 'app-input-number',
  template: `<input matInput [value]="value" type="number" (change)="inputValueUpdated($event)" style="width: 40px" />`,
})
export class InputNumberComponent implements AgRendererComponent {
  private agGridParams: any;
  value: string;
  private field: string;

  inputValueUpdated(selectElem) {
    const newValue = selectElem.target.value;
    this.agGridParams.setValue(Number(newValue));
  }

  agInit(params: ICellRendererParams): void {
    this.agGridParams = params;
    const { colDef: { field }, value } = params;
    this.field = field;
    this.value = value;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
