//Using getters and setters to Control Access to an Object

class Book {
    constructor(author)
    {
        this._author = author;
    }

    //getter
    get writer()
    {
        return this._author;
    }

    //setter
    set writer(updatedAuthor)
    {
        this._author = updatedAuthor;
    }
}

function makeClass()
{
    return Thermostat;
}

/* You know what? At this point, I'll say Beau Carnes had been
talking for approx. 3hrs and 30mins. So, he needed a break!! 

Why, cuz this stuff was just thrown at ME!!! Explanations 
are no longer clearly explained!!! He wasn't even taking a 
pause to BREATHE!!! */

//PS: LOVE HIM!!!