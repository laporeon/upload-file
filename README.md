<h1 align="center">📤 Upload Files

![node](https://img.shields.io/static/v1?label=node&message=20.18.0&color=2d3748&logo=node.js&style=flat-square)
![express](https://img.shields.io/static/v1?label=express&message=4.21.2&color=2d3748&logo=express&style=flat-square)
![multer](https://img.shields.io/static/v1?label=multer&message=1.4.5&color=2d3748&logo=npm&style=flat-square)

</h1>

## Table of Contents

- [About](#about)
- [Requirements](#requirements)
- [Installing](#installing)
- [Usage](#usage)
  - [Starting](#starting)
  - [Routes](#routes)

## About

This is a simple single route API made with the solo purpose of learning how to upload files using Multer. At this moment, you can only send one file per request. It will be saved at the `temp` folder with a unique hash as filename.

## **Requirements:**

- [NodeJS](https://nodejs.org/en) v.20 or higher

If you use [NVM](https://github.com/nvm-sh/nvm), just run `nvm use` inside of the root folder.

## **Installing:**

Yarn:

```bash
$ yarn
```

NPM:

```bash
$ npm i
```

## Usage

### **Starting**

```bash
$ npm start
```

> Project will start at http://localhost:3000/

### **Routes**

| route     | HTTP method | params | description |
| :-------- | :---------: | :----: | :---------: |
| `/`       |     GET     |   -    |  Home page  |
| `/upload` |    POST     |   -    | Upload file |

<br/>

[⬆ Back to the top](#-upload-files)
