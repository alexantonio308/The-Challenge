# ChallengeApp
Front end application based on the https://3kniis.sse.codesandbox.io/ api (Swagger) with a login and a dashboard.
>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Dependencies

Dependencies used in the project:
- @angular/animations : ^13.3.12;
- @angular/common : ~13.3.0
- @angular/compiler : ~13.3.0
- @angular/core : ~13.3.0
- @angular/forms : ~13.3.0
- @angular/localize : ~13.3.0
- @angular/platform-browser : ~13.3.0
- @angular/platform-browser-dynamic : ~13.3.0
- @angular/router : ~13.3.0
- jquery: ^3.3.1
- rxjs: ~7.5.0
- tslib: ^2.3.0
- zone.js: ~0.11.4

> @auth0/angular-jwt - This library provides an HttpInterceptor which automatically attaches a JSON Web Token to HttpClient requests.
- version: ^5.1.2 
> @ng-bootstrap/ng-bootstrap - Angular widgets built from the ground up using only Bootstrap 5 CSS with APIs designed for the Angular ecosystem.
- version: ^12.1.2 
> @popperjs/core - Given an element, such as a button, and a tooltip element describing it, Popper will automatically put the tooltip in the right place near the button.
- version: ^2.11.7 (ng-bootstrap dependencie)
> bootstrap - Device responsive designs on the web with the front-end component library.
- version: ^5.2.3 (ng-bootstrap dependencie)
> ngx-spinner - A library with more than 50 different loading spinners for Angular 4 - 15.
- version: ^13.1.1
> ngx-toastr - Allows displaying notifications to the user in web applications.
- version: ^14.3.0
> cypress - Tool for automated testing.
- version: ^12.11.0
> @compodoc/compodoc - Tool for documentation with Angular.
- version: ^1.1.19
> @fortawesome - For font (typography) and icons.
- angular-fontawesome : ^0.10.2
- fontawesome-free : ^6.4.0
- fontawesome-svg-core : ~1.2.36
- free-solid-svg-icons : ^5.15.4

## Install Dependencies

Run `npm install` for install the dependencies in the local node_modules folder. By default, npm install will install all modules listed as dependencies in package.json. 
*The package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

@angular/animations : ^13.3.12
@angular/common : ~13.3.0
@angular/compiler : ~13.3.0
@angular/core : ~13.3.0
@angular/forms : ~13.3.0
@angular/localize : ~13.3.0
@angular/platform-browser : ~13.3.0
@angular/platform-browser-dynamic : ~13.3.0
@angular/router : ~13.3.0
@compodoc/compodoc : ^1.1.19
@fortawesome/angular-fontawesome : ^0.10.2
@fortawesome/fontawesome-free : ^6.4.0
@fortawesome/fontawesome-svg-core : ~1.2.36
@fortawesome/free-solid-svg-icons : ^5.15.4
jquery : ^3.3.1
rxjs : ~7.5.0
tslib : ^2.3.0
zone.js : ~0.11.4

### @auth0/angular-jwt 
version: ^5.1.2 
- This library provides an HttpInterceptor which automatically attaches a JSON Web Token to HttpClient requests.

### @ng-bootstrap/ng-bootstrap 
version: ^12.1.2 
- Angular widgets built from the ground up using only Bootstrap 5 CSS with APIs designed for the Angular ecosystem.
#### (dependencies) 
##### @popperjs/core 
version: ^2.11.7 
- Given an element, such as a button, and a tooltip element describing it, Popper will automatically put the tooltip in the right place near the button.
##### bootstrap 
version: ^5.2.3 
- Device responsive designs on the web with the front-end component library.

### ngx-spinner 
version: ^13.1.1
- A library with more than 50 different loading spinners for Angular 4 - 15.

### ngx-toastr
version: ^14.3.0
- Allows displaying notifications to the user in web applications.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running end-to-end tests with Cypress
Run `npx cypress open`. After a moment, the Cypress Launchpad will open.
Click up at `E2E Testing`:

![image](https://user-images.githubusercontent.com/17026031/235386885-e25f1b68-43bf-42de-837f-73ea2d8334e5.png)

After click up `Start E2E` in your prefer browser:

![image](https://user-images.githubusercontent.com/17026031/235386654-890ffc77-2757-4caf-a874-4053d197cf89.png)

In Specs click up at > testBase.cy.ts:

![image](https://user-images.githubusercontent.com/17026031/235386686-e7bab12c-4255-433e-b109-8f71980155c3.png)

Automatically test them when starting:
![image](https://user-images.githubusercontent.com/17026031/235386844-8876ef56-d1e3-49bf-929c-ece813e4b420.png)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Modules and your dependencies

![Captura de tela 2023-04-30 211951](https://user-images.githubusercontent.com/17026031/235396043-187d4a5d-ec03-472d-93ac-1520e608ac01.png)

## Screens
- Login

![image](https://user-images.githubusercontent.com/17026031/235395828-a96789a3-9b00-4b27-ae19-b72f4222f58a.png)

- Dashboard

![image](https://user-images.githubusercontent.com/17026031/235395904-81f1778c-f7a2-4f23-88ef-eb853edecd2f.png)

- New Payment

![image](https://user-images.githubusercontent.com/17026031/235395944-f540fddd-7583-47ca-a742-255b6adee967.png)

- Edit Payment

![image](https://user-images.githubusercontent.com/17026031/235395976-9842cdf5-4263-4a56-9872-344d110d3239.png)
