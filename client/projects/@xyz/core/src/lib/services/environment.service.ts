import { Inject, Injectable } from '@angular/core';

import { XyzCoreConfiguration, XYZ_CORE_CONFIGURATION } from '../xyz-core-configuration.model';

@Injectable()
export class EnvironmentService {
  constructor(
    @Inject(Window) private _window: Window,
    @Inject(XYZ_CORE_CONFIGURATION) private _env: XyzCoreConfiguration
  ) {
    console.log("environemnt service in core lib ", this._env);
  }

  public getApiBaseUrl(): string {
    const hostParts: string[] = this._window?.location?.host?.split('.');
    const subdomain: string = hostParts?.length > 1 ? hostParts[0] + '.' : '';
    const apiSlug: string = this._env.api.apiSlug.length ? `/${this._env.api.apiSlug}` : ''; 
    return `${this._env.api.protocol}://${subdomain}${this._env.api.host}:${this._env.api.port}${apiSlug}`;
  }

  public getAuthBaseUrl(): string {
    const hostParts: string[] = this._window?.location?.host?.split('.');
    const subdomain: string = hostParts?.length > 1 ? hostParts[0] + '.' : '';
    const authSlug: string = this._env.api.authSlug.length ? `/${this._env.api.authSlug}` : ''; 
    return `${this._env.api.protocol}://${subdomain}${this._env.api.host}:${this._env.api.port}${authSlug}`;
  }

  public getEnvironment(): any {
    return this._env;
  }
}
