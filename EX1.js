var myNumberList = [12, 2112, 9000, 1999, 24];
// var biggestNumber = 9000;

// for (x=0; x<9000;x++) // KEY ???
// {
//     alert(myNumberList);
//     alert(biggestNumber);//It's self documenting - HAHA We Gotta Comedian HERE! :-P

// }

// KEY: Try this
    
    var biggestNumber = -1;

    for (var x = 0; x < myNumberList.length; x++) {
        if (myNumberList[x] > biggestNumber) {
            biggestNumber = myNumberList[x];
        }


    }       

    console.log("The largest number is " + biggestNumber);
