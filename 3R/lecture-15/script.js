let radii=[1,2,3,4,5];
// area=[3.14, ,  , ,  ,];
// circum=[6.28,, , , , ];
// sphere=[, , , , ,];
// hemisphere=[, , , , ];

function area(r){
    return 3.14*r*r;
}
function circum(r){
    return 2*3.14*r;
}
function sphere(r){
    return 4/3*3.14*r*r*r;
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
calculate(area)
calculate(circum)
calculate(sphere)
calculate(hemisphere)