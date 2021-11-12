import { TenantResolutionMiddleware } from './tenant-resolution.middleware';

describe('TenantResolutionMiddleware', () => {
  it('should be defined', () => {
    expect(new TenantResolutionMiddleware()).toBeDefined();
  });
});
