# mBedCode-Angular

The mBedCode Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Documentation

[Node.js](https://nodejs.org/en/docs/)

[Yarn](https://yarnpkg.com)

[Angular](https://angular.io/)

[Angular CLI](https://cli.angular.io/)

[Jest](https://jestjs.io)

[Angular Style Guide](https://angular.io/guide/styleguide)

[RxJS](https://rxjs-dev.firebaseapp.com/)

[Firebase](https://firebase.google.com/docs/)

[Firebase CLI](https://firebase.google.com/docs/cli/)

[AngularFire](https://github.com/angular/angularfire)

## Common NPM commands in Yarn

|NPM Command                                                                                | Yarn Command              | Description (_wherever necessary_)                                                 |
|:------------------------------------------------------------------------------------------|:--------------------------|------------------------------------------------------------------------------------|
|npm install                                                                                |yarn <br> yarn install    |Will install packages listed in the `package.json` file                             |
|npm install `pkg-name` <br> npm install --save `pkg-name`                                 | yarn add `pkg-name`       |By default Yarn adds the `pgk-name` to `package.json` and `yarn.lock` files         |
|npm install `pkg-name@1.0.0`                                                               | yarn add `pgk-name@1.0.0` |                                                                                    |
|npm install `pkg-name` --save-dev                                                          | yarn add `pkg-name` --dev |                                                                                    |
|npm install `pkg-name` --peer                                                              | yarn add `pkg-name`--peer |                                                                                    |
|npm install `pkg-name` --optional                                                          | yarn add --optional       |                                                                                    |
|npm install -g `pkg-name`                                                                  | yarn global add `pkg-name`| Careful, yarn add global `pkg-name` adds packages `global` and `pkg-name` locally! |
|npm update                                                                                 | yarn upgrade              | Note: It's called **upgrade** in yarn                                              |
|npm uninstall `pkg-name`                                                                   | yarn remove `pkg-name`    |                                                                                    |
|npm run `script-name`                                                                      | yarn run `script-name`    |                                                                                    |
|npm init                                                                                   | yarn init                 |                                                                                    |
|npm pack                                                                                   | yarn pack                 | Creates a compressed gzip archive of the package dependencies                      |
|npm link                                                                                   | yarn link                 |                                                                                    |
|npm outdated                                                                               | yarn outdated             |                                                                                    |
|npm publish                                                                                | yarn publish              |                                                                                    |
|npm run                                                                                    | yarn run                  |                                                                                    |
|npm cache clean                                                                            | yarn cache clean          |                                                                                    |
|npm login                                                                                  | yarn login (and logout)   |                                                                                    |
|npm test                                                                                   | yarn test                 |                                                                                    |
|npm install --production                                                                   | yarn --production         |                                                                                    |
|npm  --version                                                                             | yarn version              |                                                                                    |
|npm  info | yarn info|


### New Commands in Yarn

|Yarn Command                      | Description                                                               |
|----------------------------------|---------------------------------------------------------------------------|
|yarn why `pkg-name`               | Builds a dependency graph on why this package is being used               |
|yarn clean                        | Frees up space by removing unnecessary files and folders from dependencies|
|yarn licenses ls                  | Inspect the licenses of your dependencies                                 |
|yarn licenses generate-disclaimer | Automatically create your license dependency disclaimer                   |

## Install the Angular CLI

### NPM

```
npm install -g @angular/cli
```

### Yarn

```
yarn global add @angular/cli
```

## Install TypeScript

### NPM

```
npm install -g typescript
```

### Yarn

```
yarn global add typescript
```

## Install Firebase Tools

### NPM

```
npm install -g firebase-tools  
```

### Yarn

```
yarn global add firebase-tools  
```

## Install NPM Check Updates

### NPM

```
npm install -g npm-check-updates
```

### Yarn

```
yarn global add npm-check-updates
```

## Modify .gitignore

Add the following to the .gitignore file

```
# node
package-lock.json

# yarn
yarn.lock
yarn-error.log

# Firebase
.firebase/*
firebase-debug.log
```

## Add Chrome/Firefox debugging configuration

Create folder .vscode and add file launch.json

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Chrome against localhost:4200, with sourcemaps",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost:4200",
            "runtimeArgs": [
              "--new-window",
              "--incognito",
              "--remote-debugging-port=9222"
            ],
            "sourceMaps": true,
            "trace": "verbose",
            "webRoot": "${workspaceRoot}"
        },
        {
            "name": "Attach Chrome against, with sourcemaps",
            "type": "chrome",
            "request": "attach",
            "port": 9222,
            "sourceMaps": true,
            "trace": "verbose",
            "webRoot": "${workspaceRoot}"
        },
        {
            "name": "Launch Firefox against localhost:4200, with sourcemaps",
            "type": "firefox",
            "request": "launch",
            "reAttach": true,
            "url": "http://localhost:4200",
            "webRoot": "${workspaceFolder}"
        }
    ]
  }
```

## Modify angular.json

Set true to false on inline and tests

```
      "schematics": {
        "@schematics/angular:component": {
          "inlineTemplate": false,
          "inlineStyle": false,
          "style": "scss",
          "skipTests": false
        },
        "@schematics/angular:class": {
          "skipTests": false
        },
        "@schematics/angular:directive": {
          "skipTests": false
        },
        "@schematics/angular:guard": {
          "skipTests": false
        },
        "@schematics/angular:interceptor": {
          "skipTests": false
        },
        "@schematics/angular:module": {
          "skipTests": false
        },
        "@schematics/angular:pipe": {
          "skipTests": false
        },
        "@schematics/angular:service": {
          "skipTests": false
        },
        "@schematics/angular:application": {
          "strict": false
        }
      },
```

## Create app.component files

Create app.component.html file in the src/app folder.

Add the following code to app.component.html:

```
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <router-outlet></router-outlet>
```

Create an empty app.component.scss file in the src/app folder.

## Modify app.component.ts

Change the component to the following:

```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
```

### Install NPM Check Update (NCU) and Check packages.json for outdated packages

At times, the package.json file can get out of date from what is current. To check for outdated packages install npm-check-updates, run ncu to see outdated packages, and then run ncu -u to update the packages.

```
ncu -u
npm install
```

## Install the Jest Testing Framework

###  NPM

``
npm install jest jest-preset-angular @types/jest --save-dev
``

### Yarn

```
yarn add jest jest-preset-angular @types/jest --dev
```

### Create setupJest.ts

Create the setupJest.ts file in the root folder and add the following code:

```
import 'jest';
import 'jest-preset-angular';
```

### Modify project.json

```
{
  ...
  "version": "1.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "jest",
    "test:cc": "jest --coverage",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setupJest.ts"
    ],
     "testPathIgnorePatterns": [
      "<rootDir>/node_modules/",
      "<rootDir>/dist/",
      "<rootDir>/src/test.ts",
      "<rootDir>/cypress/",
      "<rootDir>/src/environments/"
    ],
    "globals": {
      "ts-jest": {
        "tsConfig": "<rootDir>/tsconfig.spec.json",
        "stringifyContentPathRegex": "\\.html$",
        "astTransformers": [
          "jest-preset-angular/build/InlineFilesTransformer",
          "jest-preset-angular/build/StripStylesTransformer"
        ]  
      }
    }
  },
  ...
}  
```

### Create the file tsconfig.spec.json file in root folder. Add the following configuration:

```
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "emitDecoratorMetadata": true,
      "outDir": "./out-tsc/spec",
      "types": [
        "jest",
        "node"
      ]
    },
    "files": [
      "src/polyfills.ts"
    ],
    "include": [
      "src/**/*.spec.ts",
      "src/**/*.d.ts"
    ]
}
```

### Create app.component.spec.ts

Create the file app.component.spec.ts in the src/app folder and add the following:

```
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          AppComponent
        ],
      }).compileComponents();
    }));
  
    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  
    it(`should have as title 'angular-advisors-mirage'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('angular-advisors-mirage');
      });

    it('should render title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.content span').textContent).toContain('angular-advisors-mirage app is running!');
    });
  });  
```

## Running unit tests

### NPM

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/).

### Yarn

Run `yarn test` to execute the unit tests via [Jest](https://jestjs.io/).


## Install Cypress End-to-End Testing framework

### Install the Cypress package

### NPM

```
npm install cypress --save-dev
```

### Yarn

```
yarn add cypress --dev
```

### Create Cypress Open Command

Replace the e2e with a cypress open command in the scripts section of our package.json

```
"cypress:open": "./node_modules/.bin/cypress open"
```

### Make sure that the following Cypress folders are added to testPathIgnorePatterns in package.json

```
    "testPathIgnorePatterns": [
      "<rootDir>/node_modules/",
      "<rootDir>/dist/",
      "<rootDir>/src/test.ts",
      "<rootDir>/cypress/",
      <rootDir>/src/environments/
    ],
```

### Modify tsconfig.base.json

Add "types": ["cypress"], to the tsconfig.json file.

```
{
  "compileOnSave": false,
  "compilerOptions": {
    ...
    "target": "es2015",
    "types": ["cypress"],
  }
  ...
}
```

Add Exclude at bottom

```
  "exclude": [
    "**/*.spec.ts"
  ]
```

## Run Cypress

### NPM

```
npm run cypress:open
```

### Yarn

```
yarn cypress:open
```

After Cypress first run, it will create a cypress folder in the root directory. Move the examples folder from cypress/integration to cypress folder.

Move the example folder located at cypress\integration\examples to the cypress\examples folder

Create the file initial-page.spec.ts in the cypress/integration folder and add the following:

```
describe('initial-page', () => {

  beforeEach(() => {
    cy.visit("localhost:4200/");
  })

  it(`has title 'angular-advisors-mirage'`, () => {
    cy.contains('angular-advisors-mirage');
    cy.get('h1').should('contain', 'angular-advisors-mirage');
    cy.title().should('eq', 'AngularAdvisorsMirage');
  })

})
```

### Running end-to-end cypress tests

Two terminals are needed

In the first terminal:

Run `ng serve`

In the second terminal:

### NPM

Run `npm run cypress:open` to execute the end-to-end tests.

### Yarn

Run `yarn cypress:open` to execute the end-to-end tests.

A window will pop up and them just click on initial-page.spec.ts.

An integration test with results will be displayed.

## Add Firebase to App

Add the needed packages

### NPM

```
npm install firebase @angular/fire --save
```

### Yarn

```
yarn add firebase @angular/fire
```

### Setup Firebase

```
firebase init
```

```

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Users\Angul\Documents\GitHub\Angular-Advisors-Mirage

? Are you ready to proceed? (Y/n)
```

```
? Are you ready to proceed? Yes
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices.
 ( ) Database: Deploy Firebase Realtime Database Rules
 (*) Firestore: Deploy rules and create indexes for Firestore
 (*) Functions: Configure and deploy Cloud Functions
 (*) Hosting: Configure and deploy Firebase Hosting sites
 (*) Storage: Deploy Cloud Storage security rules
>(*) Emulators: Set up local emulators for Firebase features        
```

```
? Are you ready to proceed? Yes
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices. Firestore: Deploy rules and create indexes for Firestore, Functions: Configure and
deploy Cloud Functions, Hosting: Configure and deploy Firebase Hosting sites, Storage: Deploy Cloud Storage security rules, Emulators: Set up local emulators for Firebase features

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: (Use arrow keys)
> Use an existing project
  Create a new project
  Add Firebase to an existing Google Cloud Platform project
  Don't set up a default project
```

```
? Please select an option: Use an existing project
? Select a default Firebase project for this directory:
  angular-bulma-firebase (Angular-Bulma-Firebase)
  cofchristthorntonproduction (CofChristThorntonProduction)
> dev-angular-advisors (dev-angular-advisors)
  dev-orchardskills (Dev-OrchardSkills)
  prod-angular-advisors (prod-angular-advisors)
  prod-angular-seed-db81e (prod-angular-seed)
  prod-bright-side-author (prod-bright-side-author)
(Move up and down to reveal more choices)    
```

```
? Please select an option: Use an existing project
? Select a default Firebase project for this directory: dev-angular-advisors (dev-angular-advisors)
i  Using project dev-angular-advisors (dev-angular-advisors)

=== Firestore Setup

Firestore Security Rules allow you to define how and when to allow
requests. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore Rules? (firestore.rules)
```

```
Firestore indexes allow you to perform complex queries while
maintaining performance that scales with the size of the result
set. You can keep index definitions in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore indexes? (firestore.indexes.json)
```

```
=== Functions Setup

A functions directory will be created in your project with a Node.js
package pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions?
  JavaScript
> TypeScript    
```

```
? What language would you like to use to write Cloud Functions? TypeScript
? Do you want to use TSLint to catch probable bugs and enforce style? (Y/n)
```

```
? Do you want to use TSLint to catch probable bugs and enforce style? Yes
+  Wrote functions/package.json
+  Wrote functions/tslint.json
+  Wrote functions/tsconfig.json
+  Wrote functions/src/index.ts
+  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? (Y/n)
```

```
=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? (public)
```

```
? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? (y/N)
```

```
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
+  Wrote dist/index.html

=== Storage Setup

Firebase Storage Security Rules allow you to define how and when to allow
uploads and downloads. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Storage Rules? (storage.rules)
```

```
=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices.
 (*) Functions
 (*) Firestore
>( ) Database
 (*) Hosting
 ( ) Pubsub   
 ```

```
=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. Functions, Firestore, Hosting
? Which port do you want to use for the functions emulator? (5001)
? Which port do you want to use for the firestore emulator? 8080
? Which port do you want to use for the hosting emulator? 5000
? Would you like to enable the Emulator UI? Yes
? Which port do you want to use for the Emulator UI (leave empty to use any available port)? NaN
? Would you like to download the emulators now? No

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!
```

## Modify environments.ts

Add the firebase configuration for development

```
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAWAAlHm1XmeqcBVPVk-JJ0KYKnND9ic6s',
    authDomain: 'dev-angular-advisors.firebaseapp.com',
    databaseURL: 'https://dev-angular-advisors.firebaseio.com',
    projectId: 'dev-angular-advisors',
    storageBucket: 'dev-angular-advisors.appspot.com',
    messagingSenderId: '753899157910',
    appId: '1:753899157910:web:6825f998b396046b'
  }  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
```

## Modify envirobments.stage.ts

```
export const environment = {
    production: true,
    firebaseConfig: {
      apiKey: 'AIzaSyBF8uzhM_7s-wvewVCcGlH1u4N7ACdx_vw',
      authDomain: 'stage-angular-advisors.firebaseapp.com',
      databaseURL: 'https://stage-angular-advisors.firebaseio.com',
      projectId: 'stage-angular-advisors',
      storageBucket: 'stage-angular-advisors.appspot.com',
      messagingSenderId: '68943843338',
      appId: '1:68943843338:web:5c83d28b8c71d7cc460ff3'
    }
  };
```

## Modify environments.prod.ts

Add the firebase configuration for production

```
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyCbF5zQif1JpqaMu3X1v0jAdbdp_Y5LILQ",
    authDomain: "prod-angular-advisors.firebaseapp.com",
    databaseURL: "https://prod-angular-advisors.firebaseio.com",
    projectId: "prod-angular-advisors",
    storageBucket: "prod-angular-advisors.appspot.com",
    messagingSenderId: "295975963805",
    measurementId: "G-N7ZJ26R4L1",
    appId: "1:295975963805:web:7320779b6b105e2e"
  }
};
```

## Modify angular.json

Modify angular.json add a stage configuration in the projects => angular-advisors-mirage => architect => build => configurations section

Add the stage environment

```
          "configurations": {
            "stage": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.stage.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true,
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ]
            },
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true,
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ]
            }
          }
```

Modify angular.json add stage configuration in the projects => angular-advisors-mirage => architect => serve => configurations

```
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "angular-advisors-mirage:build"
          },
          "configurations": {
            "stage": {
              "browserTarget": "angular-advisors-mirage:build:stage"
            },
            "production": {
              "browserTarget": "angular-advisors-mirage:build:production"
            }
          }
        },
```

## Configure Dev, Test, and Prod Environment on Firebase

Add an additional environments by selecting firebase projects using the firebase use --add.

### Stage

```
firebase use --add
? Which project do you want to add?
  prod-missouri-hills
  prod-on-the-canyon-rim
  prod-orchardskills
> stage-angular-advisors
  stage-orchardskills
  angular-bulma-firebase
  cofchristthorntonproduction
(Move up and down to reveal more choices)  
```

```
? What alias do you want to use for this project? (e.g. staging) stage

Created alias stage for stage-angular-advisors.
Now using alias stage (stage-angular-advisors)
```

### Prod

```
firebase use --add
? Which project do you want to add?
  cofchristthorntonproduction
  dev-angular-advisors
  dev-orchardskills
> prod-angular-advisors
  prod-angular-seed-db81e
  prod-bright-side-author
  prod-cperaino
(Move up and down to reveal more choices)  
```

```
? Which project do you want to add? prod-angular-advisors
? What alias do you want to use for this project? (e.g. staging) prod

Created alias prod for prod-angular-advisors.
Now using alias prod (prod-angular-advisors)
```

Modify package.json and add

```
    "serve:stage": "ng serve --configuration=stage",
    "dev": "ng build",
    "stage": "ng build --prod --configuration=stage",
    "prod": "ng build --prod",
    "deploy:dev": "firebase use default && npm run dev && firebase deploy",
    "deploy:dev-oh": "firebase use default && npm run dev && firebase deploy --only hosting",
    "deploy:dev-of": "firebase use default && npm run dev && firebase deploy --only functions",
    "deploy:stage": "firebase use stage && npm run stage && firebase deploy",
    "deploy:stage-oh": "firebase use stage && npm run stage && firebase deploy --only hosting",
    "deploy:stage-of": "firebase use stage && firebase deploy --only functions",
    "deploy:prod": "firebase use prod && npm run prod && firebase deploy",
    "deploy:prod-oh": "firebase use prod && npm run prod && firebase deploy --only hosting",
    "deploy:prod-of": "firebase use prod && firebase deploy --only functions",
```

## Environments

To develop using a specific environment use the following commands:

#### dev environment

```
firebase use default
```

#### stage environment 

```
firebase use stage
```

#### prod environment 

```
firebase use prod
```

## Deployment

### Deploy to the Active (current) Environment

#### Deploy only hosting 

```
firebase deploy --only hosting
```

#### Deploy only functions

```
firebase deploy --only functions
```

#### Deploy Everything

```
firebase deploy
```

### Deploy to a specific environment

To deploy a firebase project, there are two methods: Use with Deploy and Deploy with -P flag.

###  Use with Deploy

#### dev environment

```
firebase use default
firebase deploy
```

#### stage environment 

```
firebase use stage
firebase deploy
```

#### prod environment 

```
firebase use prod
firebase deploy
```

### Deploy with -P flag

#### dev environment

```
firebase deploy -P default
```

#### test environment

```
firebase deploy -P stage
```

#### prod environment

```
firebase deploy -P prod
```

## Build and Deploy to the dev environment

### Deploy to dev with hosting and functions

```
npm run deploy:dev
```

### Deploy to dev with only hosting

```
npm run deploy:dev-oh
```

### Deploy to dev with only functions

```
npm run deploy:dev-of
```

## Build and Deploy to the stage environment

### Deploy to stage with hosting and functions

```
npm run deploy:stage
```

### Deploy to stage with only hosting

```
npm run deploy:stage-oh
```

### Deploy to stage with only functions

```
npm run deploy:stage-of
```

## Build and Deploy to the prod environment

### Deploy to prod with hosting and functions

```
npm run deploy:prod
```

### Deploy to prod with only hosting

```
npm run deploy:prod-oh
```

### Deploy to prod with only functions

```
npm run deploy:prod-of
```

## Add the Firebase Module Source Code

See Add firebase module in Code scaffolding

Modify the firebase.module.ts in the folder src/app/firebase

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular-advisors-mirage'), // initialize
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ]
})
export class FirebaseModule { }
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

### ng new command switches used

#### --style=[css | scss | less | sass | styl]

The style option specifies what CSS preprocessor is used in building the project. the options are: css, scss, less, sass, styl.

#### --routing

The routing option generates a file app-routing.module.ts file.

#### --skip-install

This skip-install option disables the npm install after code generation.

#### --skip-git

When true, does not initialize a git repository.

#### --minimal=[true|false]

When true, creates a project without any testing frameworks. (Use for learning purposes only.)

#### --strict=[true|false]

Creates a workspace with stricter type checking and build optimization options.

## ng new

```
ng new mbedcode --routing --style=scss --skip-install --skip-git --minimal=true --strict=true
CREATE mbedcode/angular.json (3158 bytes)
CREATE mbedcode/package.json (851 bytes)
CREATE mbedcode/README.md (1017 bytes)
CREATE mbedcode/tsconfig.json (737 bytes)
CREATE mbedcode/.gitignore (631 bytes)
CREATE mbedcode/.browserslistrc (703 bytes)
CREATE mbedcode/tsconfig.app.json (287 bytes)
CREATE mbedcode/src/favicon.ico (948 bytes)
CREATE mbedcode/src/index.html (294 bytes)
CREATE mbedcode/src/main.ts (372 bytes)
CREATE mbedcode/src/polyfills.ts (2826 bytes)
CREATE mbedcode/src/styles.scss (80 bytes)
CREATE mbedcode/src/assets/.gitkeep (0 bytes)
CREATE mbedcode/src/environments/environment.prod.ts (51 bytes)
CREATE mbedcode/src/environments/environment.ts (662 bytes)
CREATE mbedcode/src/app/app-routing.module.ts (245 bytes)
CREATE mbedcode/src/app/app.module.ts (393 bytes)
CREATE mbedcode/src/app/app.component.ts (1483 bytes)
```

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Add firebase module

```
ng generate module firebase -m app
CREATE src/app/firebase/firebase.module.ts (194 bytes)
UPDATE src/app/app.module.ts (474 bytes)
```


Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
