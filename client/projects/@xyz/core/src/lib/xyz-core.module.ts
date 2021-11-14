import { ModuleWithProviders, NgModule } from '@angular/core';
import { EnvironmentService } from './services/environment.service';
import { XyzCoreConfiguration, XYZ_CORE_CONFIGURATION } from './xyz-core-configuration.model';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class XyzCoreModule {
  public static forRoot(configuration: XyzCoreConfiguration): ModuleWithProviders<XyzCoreModule> {
    return {
      ngModule: XyzCoreModule,
      providers: [
        {
          provide: XYZ_CORE_CONFIGURATION,
          useValue: configuration
        },
        EnvironmentService
      ]
    }
  }
}
