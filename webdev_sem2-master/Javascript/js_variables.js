
var a = 10;
{
    var a = 20;
    console.log(a);
}
console.log(a);

console.log("--------------------");

let b = 10;
{
    let b = 20;
    console.log(b);
}
console.log(b);

console.log("--------------------");

const c = 10;
{
    const c = 20;
    console.log(c);
}
console.log(c);

console.log("--------------------");

var d = 10;
{
    const d = 20;
    console.log(d);
}
console.log(d);

console.log("--------------------");

const e = 10;
{
    let e = 20;
    console.log(e);
}
console.log(e);
const f = 30;
{
    let e = 20;
    console.log(f);
}
console.log(f);
const g = 30;
{
    let g = 20;
    console.log(g);
}
console.log(g);

const h = 30;
{
    let g = 20;
    console.log(g);
}
console.log(h);
