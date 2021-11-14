import { Inject, Injectable } from '@angular/core';

import { environment } from '@xyz/admin/env/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private readonly _env = environment;

  constructor(@Inject(Window) private _window: Window) { }

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
