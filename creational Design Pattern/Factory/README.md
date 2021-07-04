## Factory Design Pattern

A factory pattern or factory method defines an interface for creating an object, but let sub classes defines which class to instatiate. Factory method defer instantiation to sub classes. In other words, subclasses are responsible to create the instance of the class.The Factory Method Pattern is also known as **Virtual Constructor**. iI promotes the loose-coupling by eliminating the need to bind application-specific classes into the code. That means the code interacts solely with the resultant interface or abstract class, so that it will work with any classes that implement that interface or that extends that abstract class.

In the example codes, we have the index.js file, this is the main application file. In this file we are using two classes diresctly, the shopper and the employee. Using this constructor directly is ok, but as the application expands and I come up with differentt kinds of users it will be difficult keeping up with the diffent type of constructor to create this object. This is where the factory method comes in. Instead of using the classes directly, I use a factory method. This factory method decides the type of instance to create. By sending a few arguments to this method, I allow it to decide the kind of instance to create.

The factory method (userFactory) takes in different arguments like name and type of users to be created and we use this information to determine the type of object to be returned.

```javascript
const Employee = require('./Employee');
const Shopper = require('./Shopper');

var userFactory = (name, money, type, employer) => {
    if(type === 'employee'){
        return new Employee(name,money, employer)
    }else{
        return new Shopper(name, money)
    }
}

module.exports = userFactory;
```

From the above method, we can see that by passing in the argument type, we determine the kind of user to be created. The benefit of this is it encapsulate everything we need to create a user and if there is a need to expand, this can be done using the same method.