
let s: string = "";

for(let i : number = 1; i<=9; i++)
{
    for(let j : number = 1; j<=10; j++)
    {
        
        s += i*j;       
    }

    s +="\n"
}
console.log(s)

