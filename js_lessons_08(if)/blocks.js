let a = 10
{
    let b = 20
    {
        let c = 30
        //які тут будуть значення змінних a, b, c, d
        b++
        a *= 10
        console.log(a,b,c)
        // d - is not defined
    }
    {
        let c = 50
        //які тут будуть значення змінних a, b, c, d
        b += 500
        console.log(a,b,c)
        // d - is not defined
    }
    {
        const a = 100500
        const d = "value"
        //які тут будуть значення змінних a, b, c, d
        console.log(a,b,d)
        //  c - is not defined
        {
            let a = -50
            b     = 1000
            //які тут будуть значення змінних a, b, c, d
            console.log(a,b,d)
            // c - is not defined
        }
        //які тут будуть значення змінних a, b, c, d
        console.log(a,b,d)
        // c - is not defined
    }
    //які тут будуть значення змінних a, b, c, d
    console.log(a,b)
    // c, d - is not defined
}
//які тут будуть значення змінних a, b, c, d
console.log(a)
// b, c, d - is not defined
