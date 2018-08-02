
for (x = 0; x < 100; x++) { //It's self documenting
    if ( x%3 ===0)
    {
        alert("fizz" + x)
    }
       else if (x%5 ===0)
        {
        alert("buzz" + x)
        }

        if (x%3 ===0 && x%5 ===0)
        {
            alert("fizzbuzz")
        }

    else
        {
            alert(x)
        }
    }
