# Ice And Fire Realm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Getting Started

In order to get started, create an `environment.ts` file for serving local and `environment.prod.ts` for production, both these files should follow `environment.example.ts` as template

## Application Screens / Modules

1. Welcome Screen; this module fetches paginated and filterable based on name books from `/books` API end point and displays results in an infinite scroll view,
2. Book Detail Screen; this module displays detailed info pertaining to a book and also fetches individual characters realted to our book in a paginated manner, since `/characters` API endpoint _doesn't allow filtering characters based on a Book_, all these characters are fetched via individual end points `/characters/:id` obtained from `/books/:id` and displayed in an infinite scrolls view, also due to above limitation from API, characters pertaining to a single book are not fiterable via API, as a result they are being filtered at client side which works only on fetched data set available at client side.
3. Character Detail Scree; This module shows details pertaining to a single character, as well as who this character is related to and list of books this character was featured in
