# Overview

This folder like basic explanation about the starter basic setup for Typescript


## Starting

- npm init -y
- npm i --save-dev typescript
- npx tsc --init

## Notes

- package.json
  
  ```json

  {
  "name": "to-do-list-typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "tsc --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.5.3"
  }
}
  ```

Especially look at "script". This bunch code make the typescript source automate to javascript 

- tsconfig.json

```json
 "module": "ES6",      // for import some stuff like example at src/script.ts
  "outDir": "./dest",                                   /* Specify an output folder for all emitted files. */
```
