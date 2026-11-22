
let s: string = "";

for(let i : number = 10; i>=1; i--)
{
    for(let j : number = 10; j>=1; j--)
    {
        if(j<=i)
        {
        s +=j
        }                  // i   // +" ";   
    }
    s +="\n"
}
console.log(s)
