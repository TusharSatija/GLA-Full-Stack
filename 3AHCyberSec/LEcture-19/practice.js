let raddii=[1,2,3,4,5];
// area =[ , , , , , ]; 3.14*r*r;
// cir=[ , , , ,  ];  2*3.14*r;
// hemisphere=[ , , , , ]  2/3*3.14*r*r*r;
//sphere=[ , , , , ] 4/3*3.14*r*r*r;

function calculate(logic)
{
    let res=[];
    for(let i=0;i<raddii.length;i++)
    {
        res.push(logic(raddii[i]));
    }
    console.log(res);
}

function area(r)
{
    return 3.14*r*r;
}

function cirm(r)
{
    return 2*3.14*r;
}
function sphere(r)
{
    return 4/3*(3.14*r*r*r);
}

function hemisphere(r)
{
    return 2/3*(3.14*r*r*r);
}
calculate(area);
calculate(cirm);
calculate(sphere);
calculate(hemisphere);