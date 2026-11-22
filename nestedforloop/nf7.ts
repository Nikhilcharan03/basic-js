
let s: string = "";

for(let i : number = 1; i<=9; i++)
{
    for(let j : number = 1; j<=i; j++)
    {
        s +="*"     // i   // +" ";
    }
    s +="\n"
}
console.log(s)
