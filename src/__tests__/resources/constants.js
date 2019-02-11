import { guid } from '../../resources/constants';

describe('Testing guid()', () => {
  it('Generate user identity', () => {
    expect(guid().length).toBe(20);
  });
});
