window.onload=()=>{
    var lunbo=document.getElementById("lunbo");
    var num=1;
    setInterval(function(){
        num++;
        if(num==4){
            num=1;
        }
        lunbo.src="./images/news-image"+num+".jpg";
    },3000)
    
   
    // function tabsdisplay(a){
    //     alert(1);
    //  var tabs = document.getElementById("suggest-tabs").getElementsByTagName("li");
    // // let text = document.getElementByClassName("suggest-text");
        
    //     alert(2);
    //         for(let y = 0; y < tabs.length ; y++ ){
    //             alert(3);
    //             tabs[y].style.display='none';
    //             alert(4);
    //             // text[i].class='suggest-text';
    //         }
    //         alert(5);
    //         tabs[a].style.display = 'block';
    //         // text[a].class += 'suggest-on';
        
    // }
             
}
function tabson(a){
    var tabs = document.getElementById("suggest-tabs").getElementsByTagName("li");
    let text = document.getElementsByClassName("suggest-text");
    let i=tabs.length;
    tabs[0].className= '';
    tabs[1].className= '';
    tabs[2].className= '';
    tabs[3].className= '';
    text[0].className='suggest-text';
    text[1].className='suggest-text';
    text[2].className='suggest-text';
    text[3].className='suggest-text';
    if(tabs[0]==a){
        tabs[0].className='tab-on';
        text[0].className='suggest-text suggest-on';
    }
    if(tabs[1]==a){
        tabs[1].className='tab-on';
        text[1].className='suggest-text suggest-on';
    }
    if(tabs[2]==a){
        tabs[2].className='tab-on';
        text[2].className='suggest-text suggest-on';
    }
    if(tabs[3]==a){
        tabs[3].className='tab-on';
        text[3].className='suggest-text suggest-on';
    }
    
}
