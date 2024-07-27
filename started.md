# Preparation


* Lets start with open terminal in visual studio code.

* Run ```tsc --init``` in terminal to config default typescript.


*  After that uncomment 

1. ```"noImplicitAny": true,"``` 

2. ```"outDir": "./bundle", "``` 

3. ```"rootDir": "./src",```.So we can run it.


* After this example we make ```src```folder and ```src/index.ts```.

   Make some test code :

```javascript
let myName = "World";
console.log(myName);

```

* Input ```tsc``` in terminal and otomatically we will make ```bundle``` folder with index.js :
```javascript
"use strict";

let myName = "Reza";
console.log(myName);
```

* To compile typescript we should use 
```powershell
tsc && node bundle/index.js 
```
 If you get an error below :
 ```powershell
 + tsc && node bundle/index.js
+     ~~
The token '&&' is not a valid statement separator in this version.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : InvalidEndOfLine
 ```
 
 We can trick it with :
 ```powershell
 tsc ; node bundle/index.js 
 ```


  

