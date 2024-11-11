function Download(url,Down)
{
    console.log("file start downloading....");
    setTimeout(()=>{
        let img=url.split('/').pop();
        Down(img);
    },3000);
}
function Compress(img,comp)
{
    console.log("file start compressing...");
    setTimeout(()=>{
        let cmp=img.split('.')[0]+".zip";
        comp(cmp);
    },2000);
}

function upload(cmp,upl)
{
    console.log("file start uploading...");
    setTimeout(()=>{
        let uploaded="Data is uploaded at server"+cmp;
        upl(uploaded);
    },1000);
}



Download("https://www.facebook.com/img.jpg",function Down(img){
    console.log("file downloaded successfully..",img);
    Compress(img,function comp(cmp){
        console.log("file compressed successfully",cmp);
        upload(cmp,function upl(uploaded){
            console.log('file uploaded successfully..',uploaded);
        })
    })
});