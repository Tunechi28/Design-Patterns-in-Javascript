## Prototype Design Patern

This pattern specify the type of object you create using prototypical instance, and create new objects by copying the prototype. JavaScript does not support classes in its native form. Inheritance between objects is implemented using prototype-based programming.

It enables us to create objects which can serve as a prototype for other objects being created. The prototype object is used as a blueprint for each object the constructor creates.

The example has a Shopper class that has attributes of name and shopping list. This also has the addItemToList method, that adds a new item to a Shopper's shopping list array. From the index. js, We have two instance of shopper instantiated and both essentially have the same list. So the process of setting up each shopper is requires we duplicate the same code. For a much larger application it will be really stressful to create each of those objects. We save time  and reduce redundancy by implementing the prototype pattern.

We create a new file called the scout_prototype.js, we will create a new scout object from the Shopper class and add common shopping list items to the scout list. We will also delete the scout name as we need this scout instance to create multiple scouts.

```javascript
const Shopper = require("./Shopper");

const scout = new Shopper();

scout.addItemToList('camping knife');
scout.addItemToList('tent');
scout.addItemToList('backpack');
scout.addItemToList('map');

module.exports = scout;
```

We create a clone method in the Shopper class that creates exact clones of the scout prototype in his current state and any clones created can then be personalized. If we have very complicated objects this will save us a lot of time.

The clone methods gets the prototype of the current object, creates the a new object and add the current prototype to the current instance. This gets all the method of the current object, but we also want to get the current value of the object. The code looks like this.

```javascript
clone(){
        var proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);

        cloned.name = this._name
        cloned._shoppingList = [...this._shoppingList]

        return cloned;
```

A new object can be created from the scout prototype by calling the clone method and the name attribute can be added to it

```javascript
var eve = scout_prototype.clone()
eve.name = 'eve tobe'
```

Take notice how prototype inheritance makes a performance boost and cleaner code as well because both objects contain a reference to the functions which are implemented in the prototype itself, instead of in each of the objects.