## Factory functions 
A factory function is any function which is not a class or constructor that returns a (presumably new) object. In      JavaScript, any function can return an object. When it does so without the new keyword, it’s a factory function.

```
cons createUser = ({ userName, avatar }) => ({
  userName,
  avatar,
  setUserName (userName) {
    this.userName = userName;
    return this;
  }
});
console.log(createUser({ userName: 'echo', avatar: 'echo.png' }));
/*
{
  "avatar": "echo.png",
  "userName": "echo",
  "setUserName": [Function setUserName]
}
*/
```
