# throttle-vs-debounce

##Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.
For instance, when a user clicks on a button, a helloWorld function is executed which prints Hello, world on the console. Now, when throttling is applied with 1000 milliseconds to this helloWorld function, no matter how many times the user clicks on the button, Hello, world will be printed only once in 1000 milliseconds. Throttling ensures that the function executes at a regular interval.
