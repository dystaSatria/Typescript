# 1. 

```typescript
function add(x,y) example
const addNumber = (x,y): void => {
    const z = x+y;
    console.log("the result is :" + z);
  };

addNumber(12 + 22); // this is will error;
//you can fix this error with ("noImplicitAny": false,)  in tsconfig.json file
```
This is will error. You can solve it with
```json
"noImplicitAny": false,
```
