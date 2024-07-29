const images= document.querySelectorAll(".headerSlider ul img");
const prevButton=document.querySelector(".control_prev");
const nextButton=document.querySelector(".control_next");

let n=0;
function slideChange(){
    for(let i=0;i<images.length;i++)
    {
        images[i].style.display="none";
    }
    images[n].style.display="block";
}

slideChange();

prevButton.addEventListener("click",(e)=>{
    if(n>0)
    {
        n--;
    }
    else
    {
        n=images.length -1;
    }
    slideChange();
});
nextButton.addEventListener("click",()=>{
    if(n < images.length -1)
    {
        n++;
    }
    else
    {
        n=0;
    }
    slideChange();
});
const scroll=document.querySelectorAll(".products");
for(const product of scroll)
{
    product.addEventListener("wheel",(evt)=>{
        evt.preventDefault();
        product.scrollLeft+=evt.deltaY;
    });
};