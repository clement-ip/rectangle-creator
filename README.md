# Rectangle Creator
## Description
A program to create rectangles by giving their width, height, and color. This is a fully functioning CRUD application, and uses the MVC architecture.

## Instructions
A mySQL instance must be set up prior to cloning this repository. Windows users can download mySQL from [here](https://dev.mysql.com/downloads/installer/).

Next, create a database called `rectangle_creator` (or a name that you like) in mySQL with the following commands:
```
CREATE SCHEMA `rectangle_creator` ;

CREATE TABLE IF NOT EXISTS `rectangles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `width` INT NULL DEFAULT NULL,
  `height` INT NULL DEFAULT NULL,
  `area` INT NULL DEFAULT (`width` * `height`),
  `color` VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```
After that, running the following commands will get the application running:
```
npm install
npm start
```
### Technologies Used
nodeJS + mySQL
