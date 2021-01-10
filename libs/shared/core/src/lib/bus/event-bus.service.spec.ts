import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { EventBusService } from './event-bus.service';
import { EventData } from './model/event-bus.model';

describe('EventBusService', () => {
  let spectator: SpectatorService<EventBusService>;
  const createService = createServiceFactory({
    service: EventBusService,
    mocks: [],
  });

  beforeEach(() => (spectator = createService()));

  it('should exists', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('on event1 should returns value1', () => {
    spectator.service.on('event1', (value) => {
     expect(value).toEqual('value1');
    });
    spectator.service.emit({ messageName: 'event1', value: 'value1' } as EventData<string>);
  });
});
