var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

let totalMonths; //variable to store total number of months
let totalProfits; //variable to store total profits
let sumChangePnL //sumChangePnL stores the sum of all the profit changes
let avgChangePnL; //variable to store average change in P and L
let incProfits; //variable to store greatest increase in profits
let incProfitsMonYear // variable to store month and year with greatest increase in profits
let decProfits; //variable to store greatest decrease in profits
let decProfitsMonYear  // variable to store month and year with greatest decrease in profits

// Format the profits to USD using the locale, style, and currency.
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0, //removes numbers after decimal point

});


//console log to the end
// console.log ("Financial Analysis");
// console.log ("------------------------");

//console log moved to the end
//calculate total number of months in the dataset
 totalMonths = finances.length;
// console.log ("Total Months: " + totalMonths);


//net total amount of profit and losses over the entire period
totalProfits = 0; //initialize totalProfits at 0
// for each line in the area, look at the 2nd column and add to totalProfits
// This have moved into the main for loop for efficiency (see IMPORTANT below for loop)
// for (let i = 0; i < totalMonths; i++) {
//        totalProfits += finances[i][1];
// }




sumChangePnL = 0; //initialize variable


//greatest increase in profits (date and amount) over entire period
incProfits = 0; //initialize greatest increase in profits to 0
incProfitsMonYear = "not calc'd" //initialize the month and year when profit made

decProfits = 0; //initialize greatest decrease in profits to 0 
decProfitsMonYear ="not calc'd"; //initialize date of greatest decrease in profits

 
 for (let i = 0; i < totalMonths-1; i++) //totalMonths is minus one because we are comparing this month and the next so there is no month to compare the last one to.
 {  
    totalProfits += finances[i][1];
    // console.log (finances[i][1])
   
    //tmpPnL is used to store the profit/loss between i (this month) and the i+1 (next month). It is calculated with each iteration once.
    let tmpPnL = finances[i+1][1]-finances [i][1]  ;
    
 //   console.log ("i=" + i +" " + "tmpPnL:"+tmpPnL + "  incProfits:" + incProfits + "   sumChangePnL:"+   sumChangePnL);

    if (tmpPnL > 0 ) //Increase in Profits
        {         
            sumChangePnL += tmpPnL ;// add positive number to SumChangePnl

            if (tmpPnL > incProfits) //Greater increase in profits than previously iterated/calculated
            {
                       
                    incProfits = tmpPnL; //update the greatest increase in profits variable
                    incProfitsMonYear = finances[i+1][0]; //update the date when greatest increase in profits occurred
            }
          //  console.log ("tmpPnL:"+tmpPnL + "  incProfits:" + incProfits + "   sumChangePnL:"+   sumChangePnL +  "    MonYear:"+ finances[i+1][0])
            
        }   
    else //Decrease in Profits

        {   
            sumChangePnL += (tmpPnL *-1) //multiply negative change by -1 to make a positive number and add to sumChangePnl
            if (tmpPnL < decProfits) //Greater Decrease in Profits than previously iterated/calculated
            {                           
                
                    
                   
                    decProfits = tmpPnL; //update the greatest decrease in profits variable
                    decProfitsMonYear =  finances[i+1][0]; //update the date when the greatest decrease in profits occurred
                   


            }
           // console.log ("tmpPnL:"+tmpPnL + "  decProfits:" + decProfits + "   sumChangePnL:"+   sumChangePnL + "    MonYear:"+ finances[i+1][0]);
        }  
        

}

//IMPORTANT
//Because i doesn't get to last value in the array in the above for loop we need to add it here
//Very janky but saves doing the for loop twice as i had above
totalProfits += finances[finances.length-1][1];

// average of the changes in profit/loss over the entire period is sum of all the changes divided by the total months less one because we're comparing this month with the next
avgChangePnL = sumChangePnL / (totalMonths -1);


console.log ("Financial Analysis");
console.log ("------------------------");

console.log ("Total Months: " + totalMonths);
console.log ("Total Profit: " + USDollar.format(totalProfits));
console.log ("Average Change in Profit/Loss: " + USDollar.format(avgChangePnL));
console.log ("Greatest Increase in Profits was " + USDollar.format(incProfits) + " in " + incProfitsMonYear );
console.log ("Greatest Decrease in Profits was " + USDollar.format(decProfits) + " in " + decProfitsMonYear );



