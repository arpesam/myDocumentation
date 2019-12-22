## Factory functions 
A factory function is any function which is not a class or constructor that returns a (presumably new) object. In      JavaScript, any function can return an object. When it does so without the new keyword, it’s a factory function. The new objects, dont share prototype. 

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


## Design Patterns
Facade- Usado para juntar métodos de várias classes debaixo de um método de uma única classe. 
Pense em um método que da baixa num boleto. Pode-se criar várias classes, uma para conectar no banco, outra pra validar, outra para buscar o número etc, nesse caso cria-se uma facade- que vai fazer todas essas chamadas em um método próprio. 



