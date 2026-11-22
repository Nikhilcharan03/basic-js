
let s: string = "";

for(let i : number = 10; i>=1; i--)
{
    for(let j : number = 10; j>=0; j--)
    {
        if(i<=j)
        {
        s +=j
        }                  // i   // +" ";   
    }
    s +="\n"
}
console.log(s)
