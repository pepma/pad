import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ApodHeaderComponent } from './apod-header.component';

describe('ApodHeaderComponent', () => {
  let spectator: Spectator<ApodHeaderComponent>;
  const createComponent = createComponentFactory(ApodHeaderComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
