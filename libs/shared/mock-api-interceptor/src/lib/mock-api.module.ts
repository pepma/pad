import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StorageModule } from '@pad/shared/storage';

import { MockApiInterceptor } from './interceptor/mock-api.interceptor';
import { RequestHandlerMockApiService } from './service/request-handler-mockapi.service';

@NgModule({
  providers: [
    RequestHandlerMockApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockApiInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule, StorageModule.forChild(window.sessionStorage)],
  exports: [],
})
export class MockApiModule {}
