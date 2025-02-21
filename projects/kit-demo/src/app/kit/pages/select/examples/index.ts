import { NgModule } from "@angular/core";
import { AngularSvgIconModule, SvgLoader } from "angular-svg-icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SelectSimpleExample } from "./select-simple-example/select-simple-example";
import { KruiFormFieldModule, KruiSelectModule } from '@kr-platform/ui';


export {
  SelectSimpleExample,
};

@NgModule({
  declarations: [
    SelectSimpleExample,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    KruiFormFieldModule,
    KruiSelectModule,
  ],
})
export class SelectExampleModule {}
