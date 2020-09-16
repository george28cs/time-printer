# time-printer
>Get a formatted current timestamp.  
Output language: spanish  
Example:  
Current time: 08:00 PM  
Output:  
"Ocho de la noche en punto"  

 - [Install](#install)
 - [Usage](#usage)
 - [License](#license)
 - [Release history](#release-history)
 - [Publication Date](#publication-date)
 - [GitHub](#github)

##	Install
Install whith [npm](https://www.npmjs.com/) 

    npm install --save time-printer

## Usage

    const { Time } = require('time-printer');
    
    // Create default instance with current time
    const  currentTime = new  Time();
    
    // call print method.
    currentTime.print();
    
    // Output: Hora actual: Diez de la mañana con ocho minutos

### Custom date

    const { Time } = require("time-printer");

    // Create new date
    const  customDate = new  Date(2020, 9, 16, 1, 20);
    // new Date (year, month, day, optional hour, optional minute, optional seconds, optional miliseconds)
    
    // Create new custom Time instance
    const  customTime = new  Time(customDate);
    
    // Call print method
    customTime.print();
    // Output: "Hora actual: Una de la madrugada con veinte minutos"


## License
MIT

## Release history
### v.1.0.0
stable version

### v.1.0.1
Readme updated: Package title

### v.1.0.2
Readme updated: History versions updated

## Publication date
2020-09-16

## GitHub
[https://github.com/george28cs/time-printer.git](https://github.com/george28cs/time-printer.git)
