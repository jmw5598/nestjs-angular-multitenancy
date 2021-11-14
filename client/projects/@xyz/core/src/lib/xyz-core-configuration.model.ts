import { InjectionToken } from '@angular/core';

export const XYZ_CORE_CONFIGURATION: InjectionToken<string> = new InjectionToken<string>('XYZ_CORE_CONFIGURATION');

export interface ApiConfiguration {
  protocol: string,
  subdomain: string;
  host: string,
  port: string,
  authSlug: string,
  apiSlug: string
}

export interface XyzCoreConfiguration {
  production: boolean,
  api: ApiConfiguration;
}
