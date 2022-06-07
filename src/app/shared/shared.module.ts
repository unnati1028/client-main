import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptor/header.interceptor';
import { httpInterceptor } from './interceptor';
import { HighlightDirective } from './directives/highlight.directive';
import { UppercasePipe } from './pipes/uppercase.pipe'; //it  will automactically refer  to index.ts file

@NgModule({
  declarations: [HighlightDirective, UppercasePipe],
  imports: [CommonModule],
  providers: [httpInterceptor],
  exports: [HighlightDirective],
})
export class SharedModule {}
