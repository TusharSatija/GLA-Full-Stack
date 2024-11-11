function download(url,down)
{
    console.log("file start downloading");
    setTimeout(()=>{
        let img=url.split('/').pop();
        down(img);
    },3000);
}

function compress(img,comp)
{
    console.log("file start compressing... ");
    setTimeout(()=>{
        let cmp=img.split('.')[0]+".zip";
        comp(cmp);
    },2000);
}

function upload(cmp,upld)
{
    console.log("file start uploading ....");
    setTimeout(()=>{
        let up="file uploaded to server"+cmp;
        upld(up);
    },1000);
}

download("https://www.facebook.com/img.jpg",function down(img)
{
    console.log("file downloaded successfully ",img);
    compress(img,function  comp(cmp){
        console.log("flie compressed successfully",cmp);
        upload(cmp,function upld(data){
            console.log(data);
        })
    })
});
