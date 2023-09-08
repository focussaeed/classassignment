// Chapter 1


var fisrtNumber = 3;
var secondNumber = 5;
var total = fisrtNumber + secondNumber;

// document.write ("Sum of "+ fisrtNumber + " and " + secondNumber " is " total );
document.write("Sum of ");

// q.1

alert ("Java Scipt Alert");

// q.2
alert ("Error! Please enter a vaid password");

// q.3
alert ("Wel come to JS Land \n Happy coding! ");

// q.4
alert ("Wel come to JS Land ")
alert ("Happy coding! \n  Prevent this page from creating additional dialoge");

// q.4
alert ("Wel come to JS Land ");
alert ("Happy coding! \n  Prevent this page from creating additional dialoge");

// q.4
alert ("Hello...! I can run JS through my web browser console ");

// Chapter 2
// q.1
var username;

// q.2
var myName="Saeed Ahmed";

// q.3

var message;

message="Hello World";

alert (message);

// q.4

var username="Saeed Ahmed";
var age="15 years old";
var course="Mobile application deveolopment";

alert (username);
alert (age);
alert (course);

// q.5

var a = "PIZZA \nPIZZ \nPIZ \nPI \nP";
alert(a);

// q.6
var email="abc@gmail.com";
alert ("My email address is "+email);

// q.7
var book="A smarter way to learn Java Script";
alert ("I am trying to learn from the Book "+book);

// q.8
document.write("<br>Yeh! I can write HTML content through Java Script\n");

// Chapter 3

// q.1

var age=15;
alert ("I am "+age+" Years old");


// q.2
var N=14
alert ("You have visited this site "+N+" time");

// q.3
var birthYear=1990;
document.write("<br>My birth year is "+birthYear);
document.write("<br> Data type of declared variable is number<br>");

// q.4

var vName="John Deo";
var pOrder="T-Shirt ";
var oQty=5;

document.write(vName+" ordered "+oQty);
document.write(" "+pOrder)
document.write("from ABC Store")


// Chapter 4

// q.1

var a, b, c;

// q.2 legal variables & Illegal variables 

alert ("5-Legal variabels\n\n"+ "var myNam; \nvar firstname; \nvar Lastname18; \nvar Eng_marks; \nvar $agelimit;")

alert (" 5-Illegal variabels\n\n" + "var 123myName; \nvar @firstname; \nvar Last name; \nvar 1234; \nvar alert;")

// q.3

document.write ("<br> Rule for naming JS variables");
document.write ("<br> Variable names can only contain letter, numbers,\ndollar sign and underscore \n For example $my_1stVariable");

document.write ("<br> Variables must begin with a letter, doller($) sign or\n underscore(_) \nFor example $name, _name or name");
document.write ("<br> Variables name are case sensitive");
document.write ("<br> Variables name should not be JS keywords/programming instruction");


// Chapter 5

// q.1

var fisrtNumber = 3;
var secondNumber = 5;
var total1 = fisrtNumber + secondNumber;
var total2 = fisrtNumber - secondNumber;
var total3 = fisrtNumber * secondNumber;
var total4 = fisrtNumber / secondNumber;
var total5 = fisrtNumber % secondNumber;

document.write ("</br>Sum of "+fisrtNumber+" and "+secondNumber+" is "+total1);
document.write ("</br>Subtraction after "+fisrtNumber+" and "+secondNumber+" is "+total2);
document.write ("</br>Multiplication of "+fisrtNumber+" and "+secondNumber+" is "+total3);
document.write ("</br>Division by "+fisrtNumber+" and "+secondNumber+" is "+total4);
document.write ("</br>Modulus of "+fisrtNumber+" and "+secondNumber+" is "+total5);


// q.3

var fisrtNumber;
document.write("Value after variable declaration is  "+fisrtNumber)
fisrtNumber = 5;
document.write("<br>Firtst Initial vaue is "+fisrtNumber)
++fisrtNumber;
document.write("<br>Vaue after increment is "+fisrtNumber)
var total = fisrtNumber + 7;
document.write("<br>Value after addition 7 is "+total)
--total;
document.write("<br>Value after decrement is "+total)
total=total % 3
document.write("<br>The reminder is "+total)

// q.4

var tCost=600;
var qtyPur=5;
var tAmount= tCost * qtyPur
document.write("<br> Total Cost to buy "+qtyPur+" tickets to a movie is "+tAmount+"PKR")

// q.5

var tabNo=4;
var mulNo=1;
var tabNo2 = mulNo * tabNo
document.write(" Table of "+tabNo2);
document.write("<br><br> "+tabNo+" X "+mulNo+" = "+tabNo2);
++mulNo;
var tabNo2 = mulNo * tabNo
document.write("<br> "+tabNo+" X "+mulNo+" = "+tabNo2);
++mulNo;
var tabNo2 = mulNo * tabNo
document.write("<br> "+tabNo+" X "+mulNo+" = "+tabNo2);
++mulNo;
var tabNo2 = mulNo * tabNo
document.write("<br> "+tabNo+" X "+mulNo+" = "+tabNo2);
++mulNo;
var tabNo2 = mulNo * tabNo
document.write("<br> "+tabNo+" X "+mulNo+" = "+tabNo2);
++mulNo;
var tabNo2 = mulNo * tabNo
document.write("<br> "+tabNo+" X "+mulNo+" = "+tabNo2);
++mulNo;
var tabNo2 = mulNo * tabNo
document.write("<br> "+tabNo+" X "+mulNo+" = "+tabNo2);
++mulNo;
var tabNo2 = mulNo * tabNo
document.write("<br> "+tabNo+" X "+mulNo+" = "+tabNo2);
++mulNo;
var tabNo2 = mulNo * tabNo
document.write("<br> "+tabNo+" X "+mulNo+" = "+tabNo2);
++mulNo;
var tabNo2 = mulNo * tabNo
document.write("<br> "+tabNo+" X "+mulNo+" = "+tabNo2);

// q.6

var celTemp = 25
var ferTemp;
ferTemp = (celTemp * 9/5) + 32
document.write(" "+celTemp+" C is "+ferTemp+" F")

var ferTemp=70;
var celTemp;
celTemp=(ferTemp-32) * 5/9
document.write("<br> "+ferTemp+" F is "+celTemp+" C")

// q.7

var p_Item1=650;
var p_Item2=100;
var o_Qty1=3
var o_Qty2=7
var s_chgs=100;
var t_cost= ((p_Item1*o_Qty1)+(p_Item2*o_Qty2))+s_chgs
document.write(" Price of Item 1 is "+p_Item1)
document.write("<br> Quantity of Item 1 is "+o_Qty1)
document.write("<br> Price of Item 2 is "+p_Item2)
document.write("<br> Quantity of Item 2 is "+o_Qty2)
document.write("<br> Shipping Charges is "+s_chgs)
document.write("<br><br> Total cost of your order is "+t_cost)

// Q.no 8
document.write("Q.No 8 <br>")
var t_Marks=980;
var o_Marks=804;
var per_Age=(o_Marks/t_Marks)*100
document.write("<br> Total Marks : "+t_Marks)
document.write("<br> Obtain Marks : "+o_Marks)
document.write("<br> Your Percentage : "+per_Age+"%")

// Q.no 9
document.write("Q.No 9 <br>")
var noofUsd=10;
var noofSr=25;
var exrate_Usd=104.80
var exrate_Sr=28;
var amt_Pkr=(noofUsd*exrate_Usd)+(noofSr*exrate_Sr)
document.write("<br> Total Currency in PKR "+amt_Pkr)

// Q.no 10
document.write("Q.No 10 <br>")
var num1=10;
var num2= (((num1+5) *10 ) / 2 )
document.write("<br> (((10+5) *10 ) / 2 ) ")
document.write("<br> The resut is "+num2)

// Q.no 11
document.write("Q.No 11 <br>")

var c_year=2016;
var b_Year=1992;
var age= c_year-b_Year
document.write("<br> Your age is "+age)
document.write("<br> They are either "+age+" or "+ ++age+" years old.")

// Q.no 12
document.write("Q.No 12 <br>")

var cir_radius=20;
var v_pie=3.142
var cir_fer=(cir_radius*v_pie)*2
var area_radius= (cir_radius*cir_radius)*v_pie
document.write("<br> Radius of a circle: "+cir_radius)
document.write("<br> The circumference is: "+cir_fer)
document.write("<br> The area of circle is: "+area_radius)

// Q.no 13
document.write("Q.No 13 <br>");

var fav_Snack="Chocolate Chips";
var C_age=15;
var max_age=65;
var snk_day=3;
var est_age=max_age-C_age;
var snk_est=est_age*snk_day;
var snk_year=snk_day*365;
var snk_req=snk_year*est_age;

document.write("<br> Favorate snack : "+fav_Snack);
document.write("<br> Current age : "+C_age);
document.write("<br> Estimated Maximum age : "+max_age);
document.write("<br> Amount of snacks per day : "+snk_day);
document.write("<br> You will need "+snk_est+" "+fav_Snack+" to last you until the ripe old of "+max_age);
document.write("<br><br> You will need "+snk_year+" "+fav_Snack+" per year");
document.write("<br> You will need "+snk_req+" "+fav_Snack+" to last you until the ripe old of "+max_age);

