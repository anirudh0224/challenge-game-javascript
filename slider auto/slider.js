var image=document.querySelector("#image");
var i=1;



setInterval(()=>{
    i++;
    image.src=`img/${i}.jpg`;
    if(i==10){
        i=1;
        image.src=`img/${i}.jpg`;
    }
},2000);


