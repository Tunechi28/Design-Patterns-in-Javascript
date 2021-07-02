# Design Patterns in Javascript

## What are Design Patterns

Every day when building software, we are faced with challenging problems, problems that we may have already solved. When presented with such reoccuring problems, we can either solve the problem again and again in each application or come up with an improved solution to solve this problem, a pattern. This solution can safely be used over and over again in anywhere the problem occurs. **Design Patterns** are **Reusable** and **Reliable** solutions to the problem we face everyday in software development

## The main benefits we get from design patterns are the following:

1. **They are proven solutions**: Design patterns have been used by so many developers and we are more than certain they work, this is due to the fact that they have been revised and have also been optimized
2. **They are easily reusable**: Design patterns document a reusable solution which can be modified to solve multiple particular problems, as they are not tied to a specific problem.
3. **They make code more readable**: Design patterns can help read and understanc a very large codebase easily.
4. **They help collaboration among developers**: Developers that are familiar with design patterns can easily collaborate and have an effective communication of a possible soltion to a paticular problem.
5. **They prevent the need for refactoring code**: If an application is written with design patterns in mind, it is often the case that you won’t need to refactor the code later on because applying the correct design pattern to a given problem is already an optimal solution.
6. **The codebase is easily maintained**: Because design patterns are usually elegant and optimal solutions, they usually require and encourage less, legible and maintainable code by following well understood path.

## Design Pattern Categorization.

Design pattern can be classified in so many ways, the most popular are :

1. Creational Design Pattern
2. Structural Design Pattern
3. Behavioural Design Pattern
4. Architectural Design Pattern
5. Concurrency Design Pattern

Each of this design patterns category will be explained in a separate folder and contain sub folders to explain the different types of design patterns belonging to the category, as well as code examples. The folder structure will look like this :

```
📦Design Patterns in JavaScript
 ┣ 📂creational Design Pattern
 ┃ ┣ 📂Singleton Design Pattern
 ┃ ┃ ┣ 📂after pattern implementation
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂before pattern implementatiom
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📜README.md
 ┃ ┗ 📜README.md
 ┣ 📂Structural design pattern
 ┃ ┣ 📂Adapter Design Pattern
 ┃ ┃ ┣ 📂after pattern implementation
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📂before pattern implementation
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📜README.md
 ┗ 📜README.md
```
There are sub folders in each design pattern folders called the before design implementation and after design inplementation. This shows the codes before and after design patterns is used to solve a problem.

## Anti Patterns

These are bad patterns that can negatively impact our application and cause problems. Understanding Anti Patterns is equally as important as understanding design pattern as it allows us to the ability to spot bad code. We say a *code smells* when it uses an anti pattern. There are several anti patterns in Javascript. Some of which includes

1. Modifying the prototype on an instance

```javascript
user._proto_.email = {}
```

2. Synching execution after initialization

```javascript
listen(){
    fs.readFileSync(...)
}
```

3. Callback Hell

```javascript
readFile('...', () => {
    parseData('...', () => {
        writefile('...', () => {

        });
    });
});
```

Design Patterns and Anti Patterns represent the dos and donts in Object oriented programming and software development in general. Let's dive into the different design patterns.