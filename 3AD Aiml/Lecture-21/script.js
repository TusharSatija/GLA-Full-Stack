function download(url,down)
{
    console.log("file start downloading....");
    setTimeout(()=>{
        let img=url.split('/').pop();
        down(img)
    },3000);

}
download("https://www.facebook.com/img.jpg", function down(){

});