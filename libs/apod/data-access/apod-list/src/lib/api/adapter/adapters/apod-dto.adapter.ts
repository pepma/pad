import { Injectable } from '@angular/core';
import { Adapter } from '@pad/shared/core/adapter';
import { Apod, ApodDTO } from '../../../model/apod.model';

@Injectable({ providedIn: 'root' })
export class ApodDTOAdapter implements Adapter<ApodDTO, Apod> {
  adapt(data: ApodDTO): Apod {
    return {
      date: data.date,
      explanation: data.explanation,
      mediaType: data.media_type,
      title: data.title,
      url: data.url,
    };
  }
}
