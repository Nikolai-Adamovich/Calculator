##Angular Calculator
You can find working application here:  
http://webpage.win/calculator/  
or here:  
https://javascript-calculator.herokuapp.com/  
(*heroku server can sleep after some time of inactivity, so just wait several seconds before it wakes up and web page will be available.*)

![Screenshot](/../screenshots/screenshot.png?raw=true)
![Screenshot](/../screenshots/screenshot2.png?raw=true)

* Looks great in both desktop and mobile devices.  
* Looks fine in both portrait and landscape modes.  
* You can use hardware keayboard as well as software screen keyboard via mouse or touchscreen of your smartphone.

###Install  
You should install [**node.js**](https://nodejs.org/en/) and [**git**](https://git-scm.com/).  
Run git bash and clone repository:
```
git clone https://github.com/Nikolai-Adamovich/Calculator.git
```
Run node.js command prompt and install **bower**:
```
npm i -g bower
```
Go to application directory:
```
cd path\to\cloned\application\dir
```
And install bower dependecies:
```
bower i
```
Now you can run index.html file and enjoy this application.  
If you want to run local http-server install npm dependencies:
```
npm i
```
Then run local http-server:
```
npm start
```
Then type in your browser URL http://127.0.0.1:8080/

Алгоритм и исходный код для вычисления выражения взят с [habrahabr](https://habrahabr.ru/post/50196/) и переписан мной с C# в javascript.

The MIT License (MIT)

Copyright (c) 2016 Nikolai Adamovich <adamovich.nikolai@gmail.com>
