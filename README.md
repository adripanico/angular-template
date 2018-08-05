# ProjectX

## Project structure

### CoreModule

All services which have to have one and only one instance per application (singleton services) should be implemented here. Typical example can be authentication service or user service.

### SharedModule

All the “dumb” components and pipes should be implemented here. These components don’t import and inject services from core or other features in their constructors. They should receive all data though attributes in the template of the component using them. This all sums up to the fact that `SharedModule` doesn’t have any dependency to the rest of our application.

It is also the perfect place to import and re-export Angular Material components.

### Feature modules

Inside `src/app/features` we are going to create multiple modules for every independent feature of our application. Feature modules should only import services from CoreModule. If feature module A needs to import service from feature module B consider moving that service into core.

In some cases there is a need for services which are shared only by some features and it wouldn’t make much sense to move them into core. In that case we can create special shared feature modules as described later in this post.

## LazyLoading

We should lazy load our feature modules whenever possible. Theoretically only one feature module should be loaded synchronously during the app startup to show initial content. Every other feature module should be loaded lazily after user triggered navigation.

## Aliases for app and environments

Aliasing our app and environments folders will enable us to implement clean imports which will be consistent throughout our application.

    import { DummyService } from '@app/core';

If a new service is added to the core module, remember to export it in the index.ts of the module:

    export * from './services/dummy.service';

[ source: https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81]


# Angular CLI information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
