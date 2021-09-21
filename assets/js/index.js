/*
Write a script that prompt the user to enter base and height of the triangle and calculate an area of a 
triangle (area = 0.5 x b x h). 
o Enter base: 20 
o Enter height: 10 
o The area of the triangle is 50 */
let base=prompt("enter base")
let height=prompt("enter height")
console.log(0.5*base*height)//
/*Write a script that prompt the user to enter side a, side b, and side c of the triangle and calculate the 
parameter of triangle (parameter = a + b + c) 
o Enter side a: 5 
o Enter side b: 4 
o Enter side c: 3 
o The parameter of the triangle is 12
let a =prompt('enter side a')
let b=prompt('enter side b')
let c=prompt('enter side c')
console.log(a+b+c)//234578 */

/*Get length and width using prompt and calculate an area of rectangle (area = length x width and the 
parameter of rectangle (parameter = 2 x (length + width))
let L=prompt('enter lenght')
let W=prompt('enter width')
console.log(2*(L+W))*/

/* Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a 
circle(c = 2 x pi x r) where pi = 3.14*/
let pi=3.14
let r=prompt('enter radius')
console.log(`area${pi*r*r}`)
console.log(`c=${2*pi*r}`)

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
 let x=prompt('enter x')
console.log(`y=${2*x-2}`)

// Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
let y1=2
let y2=10
let x1=2
let x2=6 
console.log(`m=${y2-y1/x2-x1}`)

/*Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y 
is 0.  */

/* is 0. 
 Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person? 
o Enter hours: 40 
o Enter rate per hour: 28 
o Your weekly earning is 1120 
*/ 
let hour=prompt("enter hour")
let rate=prompt("enter rate per hour")
console.log(`your weakly earning is ${hour*rate}`)

// If the length of your name is greater than 7 say, your name is long else say your name is short. 
let name=prompt("enter your name")
if (name>=7){
    console.log("your name is long")
}
else{
    console.log("your name is short")
}
/*
 Compare your first name length and your family name length and you should get this output. 
o let firstName = 'Murtaza' 
o let lastName = 'Lightwala' 
o Your family name, Lightwala is longer than your first name, Murtaza*/

let firstName=prompt("enter your first name")
let lastname=prompt("enter your last name")
if(firstName>lastname){
    console.log(`your firstname ${firstName} is greater than your last name ${lastname}`)
}
else{
    console.log(`your last name ${lastname} is greater than your first name ${firstName}`)
}
/* Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge. 
o let myAge = 250 
o let yourAge = 25 
o I am 225 years older than you. */
let myAge=20;
let yourage=prompt("enter your age")
if(myAge>yourage){
    console.log(`i am ${myage-yourage} year older than you`)
}
else{
    console.log(`you are ${yourage-myAge} year older than me`)
}

