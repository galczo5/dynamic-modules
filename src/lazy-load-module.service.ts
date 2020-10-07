import {
  ApplicationRef,
  Compiler,
  Injectable,
  Injector,
  ModuleWithComponentFactories,
  NgModuleRef
} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LazyLoadModuleService {

  constructor(private compiler: Compiler,
              private ngModuleRef: NgModuleRef<any>,
              private injector: Injector,
              private applicationRef: ApplicationRef) { }

  load(element: HTMLElement): void {
    import('./app/lazy/lazy.module')
      .then(module => {
        return this.compiler.compileModuleAndAllComponentsAsync(module.LazyModule);
      })
      .then((factory: ModuleWithComponentFactories<any>) => {

        const ngModuleRef = factory.ngModuleFactory.create(this.injector);

        const componentFactory = ngModuleRef.componentFactoryResolver.resolveComponentFactory((ngModuleRef as any)._bootstrapComponents[0]);
        const componentRef = componentFactory.create(this.injector, undefined, undefined, this.ngModuleRef);
        this.applicationRef.attachView(componentRef.hostView);
        componentRef.changeDetectorRef.detectChanges();
        element.appendChild(componentRef.location.nativeElement);
      });
  }
}
