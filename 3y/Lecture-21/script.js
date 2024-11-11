function Download(url,Down)
{
     console.log("file start downloading....");
     setTimeout(()=>{
        let img=url.split('/').pop();
        Down(img);  
     },3000);
}
function compress(img,comp)
{
    console.log("file start compressing...");
    setTimeout(()=>{
        let cmp=img.split('.')[0]+".zip";
        comp(cmp);
    },2000);
}

function upload(cmp,upl)
{
    console.log("file start uploading....");
    setTimeout(()=>{
        let up="file uploaded to server"+cmp;
        upl(up);
    },1000);
}

Download("https://www.facebook.com/img.jpg",function Down(img){
    console.log("file downloaded successfully.."+img);
    compress(img,function comp(cmp){
        console.log("file compressed successfully"+cmp);
        upload(cmp,function upl(data){
            console.log(data);
        })
    })
});