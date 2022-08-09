console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function odds(count){
    for (let i = 1; i <= count; i++){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}
odds(100)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name,age,DOB){
    let able = `${name}, Because you were born in ${DOB} that makes you ${age}. So you are able to drive!`;
    let notAble = `${name}, you need to wait ${
        16 - age
    } year(s) until you are able to drive{name}, Because you were born in ${DOB} that makes you ${age}.`;


if (age > 16) {
    console.log(able);
}else{
    console.log(notAble);
}
}

checkAge("Jer", 24, 1998);
checkAge("Ben", 13, 2009);
checkAge("Harold", 31, 1991);
checkAge("Sarah", 15, 2007);


//Exercise3
console.log("Exercises 3:\n==========\n");
function Quadrant(x,y){
    if (x > 0 && y > 0){
        return "quadrant 1";
    } else if ( x < 0 && y > 0){
        return "Quadrant 2"
    } else if (x < 0 && y < 0){
        return "Quadrant 4";
    } else if (x == 0 && y != 0){
        return "X Axis"
    }else if (x != 0 && y == 0){
        return "Y Axis"
    } else {
        return "Origin";
    }
}

console.log(Quadrant(2,3));
console.log(Quadrant(-2,4));
console.log(Quadrant(-3,-3));
console.log(Quadrant(1,-3));
console.log(Quadrant(0,-2));
console.log(Quadrant(1, 0));
console.log(Quadrant(0,0));



//Exercise 4
console.log("Exercise 4: \n==============\n");

function isTriangle(a,b,c){
    return a + b > c || a + c > b || b + c > a;
}

function checkTriangle(a,b,c){
    let isValid = isTriangle(a,b,c);
    if(isValid){
        if(a == b && b == c){
            return `Equilateral`;
        }else if (a == b || b == c || a == c){
            return `Isosceles`;
        }else {
            return `Scalene`;
        }
    }else {
        return `Not a trianlge`;
    }
}

console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(1, 2, 3));
console.log(checkTriangle(1, 1, 2));

//Exercise 5
console.log("Exercise 5: \n==============\n");

function dataUsage(planLimit, day, usage){
    let currentAvg = usage / day;
    let periodLength = 30;
    let projectedavg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays - currentAvg;
    let statusMSG;

    if(currentAvg > projectedavg){
        statusMSG = "Too much usage";
    }else if (currentAvg < projectedavg){
        statusMSG = "Under average usuage "
    }else{
        statusMSG = "At average usuage"
    }

console.log(`${day} day(s) used ${remainingDays} day(s) remaining
average projected use: ${projectedavg.toFixed(2)} GB a day. You are ${statusMSG} your average daily use ${currentAvg.toFixed(2)} GB a day
continuing this usage you'll end up using ${
    planLimit - (usage + projectedUsage)} GB from your data limit.
    To stay below your data plan, use no more than ${(
        remainingData / remainingDays).toFixed(2)
} GB a day.`);
}


dataUsage(50,15,25);










