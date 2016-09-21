change-case
===========

Convert strings between camelCase, PascalCase, Title Case, snake_case, etc.

Only works on Server Side
**Meteor port of https://github.com/blakeembrey/change-case**

## Instalation
```shell
meteor add ffigueroa:change-case
```

## Usage

### [camelCase](https://github.com/blakeembrey/camel-case)
Return as a string with the separators denoted by having the next letter capitalized.

```js
changeCase.camelCase('test string')
//=> "testString"
```

### [constantCase](https://github.com/blakeembrey/constant-case)
Return as an upper case, underscore separated string.

```js
changeCase.constantCase('test string')
//=> "TEST_STRING"
```

### [dotCase](https://github.com/blakeembrey/dot-case)
Return as a lower case, period separated string.

```js
changeCase.dotCase('test string')
//=> "test.string"
```

### [headerCase](https://github.com/blakeembrey/header-case)
Return as a title cased, dash separated string.

```js
changeCase.headerCase('test string')
//=> "Test-String"
```

### [isLowerCase](https://github.com/blakeembrey/is-lower-case)
Return a boolean indicating whether the string is lower cased.

```js
changeCase.isLowerCase('test string')
//=> true
```

### [isUpperCase](https://github.com/blakeembrey/is-upper-case)
Return a boolean indicating whether the string is upper cased.

```js
changeCase.isUpperCase('test string')
//=> false
```

### [lowerCase](https://github.com/blakeembrey/lower-case)
Return the string in lower case.

```js
changeCase.lowerCase('TEST STRING')
//=> "test string"
```

### [lowerCaseFirst](https://github.com/blakeembrey/lower-case-first)
Return the string with the first character lower cased.

```js
changeCase.lowerCaseFirst('TEST')
//=> "tEST"
```

### [noCase](https://github.com/blakeembrey/no-case)
Return the string without any casing (lower case, space separated).

```js
changeCase.noCase('test string')
//=> "test string"
```

### [paramCase](https://github.com/blakeembrey/param-case)
Return as a lower case, dash separated string.

```js
changeCase.paramCase('test string')
//=> "test-string"
```

### [pascalCase](https://github.com/blakeembrey/pascal-case)
Return as a string denoted in the same fashion as `camelCase`, but with the first letter also capitalized.

```js
changeCase.pascalCase('test string')
//=> "TestString"
```

### [pathCase](https://github.com/blakeembrey/path-case)
Return as a lower case, slash separated string.

```js
changeCase.pathCase('test string')
//=> "test/string"
```

### [sentenceCase](https://github.com/blakeembrey/sentence-case)
Return as a lower case, space separated string with the first letter upper case.

```js
changeCase.sentenceCase('testString')
//=> "Test string"
```

### [snakeCase](https://github.com/blakeembrey/snake-case)
Return as a string with every character case reversed.

```js
changeCase.swapCase('Test String')
//=> "tEST sTRING"
```

### [titleCase](https://github.com/blakeembrey/title-case)
Return as a space separated string with the first character of every word upper cased.

```js
changeCase.titleCase('a simple test')
//=> "A Simple Test"
```

### [upperCase](https://github.com/blakeembrey/upper-case)
Return the string in upper case.

```js
changeCase.upperCase('test string')
//=> "TEST STRING"
```

### [upperCaseFirst](https://github.com/blakeembrey/upper-case-first)
Return the string with the first character upper cased.

```js
changeCase.upperCaseFirst('test')
//=> "Test"
```

## Change Case Package Version
2.3.0
