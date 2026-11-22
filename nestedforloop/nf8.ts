
let s: string = "";

for(let i : number = 10; i>=0; i--)
{
    for(let j : number = 10; j>=0; j--)
    {
        if(j<=i)
        {
        s +="*" + " ";
        }                  // i   // +" ";   
    }
    s +="\n"
}
console.log(s)


