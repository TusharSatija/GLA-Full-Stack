let radii=[1,2,3,4,5];
// area=[3.14, , , , , ];   3.14*r*r;
// circ=[6.28, , ,, , ,];   2*3.14*r;
// sphere=[ ,, , , , ];      4/3*3.14*r*r*r;
// hemisphere=[, , , ,  ];    2/3*3.14*r*r*r;



function Area(r)
{
    return 3.14*r*r;
}
function circ(r)
{
    return 2*3.14*r;
}
function sphere(r)
{
    return  4/3*3.14*r*r*r;
}

function hemisphere(r)
{
    return 2/3*3.14*r*r*r;
}


function calculate(logic)
{
    let res=[];
    for(let i=0;i<radii.length;i++)
    {
        res.push(logic(radii[i]));
    }
    console.log(res);
     
}
calculate(Area);
calculate(circ);
calculate(sphere);
calculate(hemisphere);