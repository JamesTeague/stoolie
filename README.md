Stoolie
---
![GitHub package.json version](https://img.shields.io/github/package-json/v/JamesTeague/stoolie) ![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg) ![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg) ![GitHub](https://img.shields.io/github/license/JamesTeague/stoolie)

A person employed or acting as a decoy or informer, especially for the police.

This is a logger package that wraps winston with some easy utility methods.

## Import
```javascript
import stoolie from 'stoolie';
```
## Using Stoolie
```javascript
import stoolie, { LogLevel } from 'stoolie'; 
const logger = stoolie(LogLevel.INFO);

const entry = logger.withCategory('example').withType('README');
entry.info('Log a message');
```

## Log Levels
- Error
- Warn
- Info
- Verbose
- Debug
- Silly

## Testing

For testing a NullLog can be imported by name. This will allow you to pass in a logger without having to mock one out.
