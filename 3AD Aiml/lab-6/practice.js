let radii=[1,2,3,4,5];
//op area=[3.14 , , , , , ];   pi*r*r;
//circum=[6.28, , ,  , , ];    2*pi*r
//sphere=[ , , , , ,];         4/3*pi*r*r*r
//hemisphere=[,,, , , ];       2/3*pi*r*r*r



function calculate(logic)
{
    let res=[];
    for(let i=0;i<radii.length;i++)
    {
        res.push(logic(radii[i]));
    }
    console.log(res);
}

function Area(r)
{
    return Math.PI*r*r;
}

function circum(r)
{
    return 2*Math.PI*r;
}

function hemisphere(r)
{
    return 2/3*Math.PI*r*r*r;
}
function sphere(r)
{
    return 4/3*Math.PI*r*r*r;
}
calculate(Area)
calculate(circum)
calculate(sphere)
calculate(hemisphere)
