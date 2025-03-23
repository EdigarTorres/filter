import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';

import { FilterComponent } from './filter/filter.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [UserDetailsComponent, UserListComponent, FilterComponent],
  imports: [AngularMaterialModule, CommonModule, FormsModule, PipesModule],
  exports: [UserDetailsComponent, UserListComponent, FilterComponent],
})
export class ComponentsModule {}
