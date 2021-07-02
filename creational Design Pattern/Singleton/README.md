## Singleton Design Pattern

The Singleton Design Pattern ensures a class has only one instance and provides a global point of access to it. It is used in scenarios when we need exactly one instance of a class. For example, we need to have an object which contains some configuration for something. In these cases, it is not necessary to create a new object whenever the configuration object is required somewhere in the system.

In our example, we have a **Logger** class. This class allows the application to log information without using the console.log. it has a log method that prints out all the logs sent to it with a timestamp. We also have a **Shopper** class and a **Store** class that utilizes this logger. The .log method is called in both classes and also in the index.js. If we run the code (node index.js), we get the following result.

```
2021-07-02T00:32:20.217Z - starting app...
2021-07-02T00:32:20.234Z - New Shopper: alex has 500 in their account.
2021-07-02T00:32:20.235Z - New Store: Steep and Deep Supplies has 2 items in stock.
2021-07-02T00:32:20.235Z - finished config...
2 logs total
   starting app...
   finished config...
```
From the above we can see four logs and their timestamps, but Logger.count in the index.js got a count of 2 and also two logs printed. This is because three instances was created but we only get information from the instance created in the main application(index.js). When we have this type of problem a singleton can come in handy

## Singleton implementation

We create a Singleton class in the Logger.js file that prevents us from creating multiple instance of the logger and only have one instance and anytime we need that instance, we are going to retrieve it through a getInstance method.

```javascript
class Singleton {
    constructor(){
        if(!Singleton.instance){
            Single.instance = new Logger()
        }
    }

    getInstance(){
        return Singleton.instance
    }
}

module.exports = Singleton;
```

The line where the logger was initially instatiated in the Store.js, index.js and Shopper.js is then modified to have a .getInstance chained to it.

```javascript
var logger = new Logger().getInstance();
```

When we run the application (node index.js), we get the following result

```
2021-07-02T01:26:21.711Z - starting app...
2021-07-02T01:26:21.729Z - New Shopper: alex has 500 in their account.
2021-07-02T01:26:21.730Z - New Store: Steep and Deep Supplies has 2 items in stock.
2021-07-02T01:26:21.731Z - finished config...
4 logs total
   starting app...
   New Shopper: alex has 500 in their account.
   New Store: Steep and Deep Supplies has 2 items in stock.
   finished config...
```

From the above we can see that we have 4 logs in total, even though we are using the Logger in multiple files, we are still using only one instance.

## Implementing Singleton in Nodejs

We can implement the Singleton a much easier way without creating a singleton class. We do this by exporting an instance fronm the Logger.js module.

```javascript
module.exports = new Logger();
```

The idea behind this is when we run this file, it will run once, create a new instance of the Logger and save it in the cache. Nodejs will automaticallly handle exporting the same instance of the logger to every other module that will we want to import it. We no longer have to instantiate Logger in the Shopper.js, index.js, and store.js, rather we import the instance directly.

```javascript
var logger = require('./Logger');
```