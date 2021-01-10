import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { DefaultComponent } from './default.component';

describe('DefaultComponent', () => {
  let spectator: Spectator<DefaultComponent>;
  const createComponent = createComponentFactory(DefaultComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
