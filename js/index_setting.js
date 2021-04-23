// menu target
const home=document.querySelector("#home");
const about=document.querySelector("#about");
const resume=document.querySelector("#resume");
const portfolio=document.querySelector("#portfolio");
const blog=document.querySelector("#blog");
const contact=document.querySelector("#contact");
const menuOptionAll=document.querySelectorAll("#about,#resume,#portfolio,#blog,#contact");

//section target
const homeP=document.querySelector("#homeP");
const aboutP=document.querySelector("#aboutP");
const resumeP=document.querySelector("#resumeP");
const portfolioP=document.querySelector("#portfolioP");
const blogP=document.querySelector("#blogP");
const contactP=document.querySelector("#contactP");




//menu setting start
// home page 
home.addEventListener("click",function(){
let existingPage=document.querySelectorAll("#aboutP,#resumeP,#portfolioP,#blogP,#contactP");
	existingPage.forEach(function(value,index){
		value.classList.remove("sectionBlock")


	})

});//home end


// about page 
about.addEventListener("click",function(){
	// display:block class add on click
	aboutP.classList.toggle("sectionBlock");

	//display:none class remove on click
	let existingPage=document.querySelectorAll("#resumeP,#portfolioP,#blogP,#contactP");
	existingPage.forEach(function(value,index){
		value.classList.remove("sectionBlock")

	})
	
});
//about end



// resume page
resume.addEventListener("click",function(){
	// display:block class add on click
	resumeP.classList.toggle("sectionBlock");

	//display:none class remove on click
	let existingPage=document.querySelectorAll("#aboutP,#portfolioP,#blogP,#contactP");
	existingPage.forEach(function(value,index){
		value.classList.remove("sectionBlock")

	})
	
});//resume end

// portfolio page 
portfolio.addEventListener("click",function(){
	// display:block class add on click
	portfolioP.classList.toggle("sectionBlock");

	//display:none class remove on click
	let existingPage=document.querySelectorAll("#resumeP,#resumeP,#blogP,#contactP");
	existingPage.forEach(function(value,index){
		value.classList.remove("sectionBlock")

	})
	
});//portfolio end


// Blog page
blog.addEventListener("click",function(){
	// display:block class add on click
	blogP.classList.toggle("sectionBlock");

	//display:none class remove on click
	let existingPage=document.querySelectorAll("#resumeP,#resumeP,#portfolioP,#contactP");
	existingPage.forEach(function(value,index){
		value.classList.remove("sectionBlock")

	})
	
});//blog end


// contact page
contact.addEventListener("click",function(){
	// display:block class add on click
	contactP.classList.toggle("sectionBlock");

	//display:none class remove on click
	let existingPage=document.querySelectorAll("#resumeP,#resumeP,#portfolioP,#blogP");
	existingPage.forEach(function(value,index){
		value.classList.remove("sectionBlock")

	})
	
});//contact end


// sound
var audio = document.getElementById("audio");

function togglePlay() {
  return audio.paused ? audio.play() : audio.pause();
};
let sound=document.querySelector(".sound")
sound.addEventListener("click",function(){
	this.classList.toggle("soundColor")
});
//menu setting end


"use strik"
// full body
let fullBody=document.querySelector(".fullBody");

function resBody(){
	let fullBodyWidth=window.innerWidth;
	if(fullBodyWidth <=768){
	fullBody.classList.add("responsiveBody");
	let responsiveBody =document.querySelector(".responsiveBody")
	let winheight=window.innerHeight;
	responsiveBody.setAttribute("style","height:"+winheight+"px !important")


	}else if(fullBodyWidth > 768){
		fullBody.classList.remove("responsiveBody")
	}
};

setInterval(resBody,100)

//home page start
			//home target
			setInterval(function(){
				const changeP=document.querySelector("#changeP");
				const changeP2=document.querySelector("#changeP2");

				setTimeout(function(){
					changeP.classList.add("changePEffect1")
				},10);

				setTimeout(function(){
					changeP.classList.remove("changePEffect1")
				},1500);

				setTimeout(function(){
					changeP2.classList.add("changePEffect1")
				},2400);

				setTimeout(function(){
					changeP2.classList.remove("changePEffect1")
				},4000);

			},4700);
			//home end





// about slider start
// target
let TBox1=document.querySelector(".TBox.box1")
let TBox2=document.querySelector(".TBox.box2")
let TBox3=document.querySelector(".TBox.box3")

const testimoCont1=document.querySelector("#testimoCont1");
const testimoCont2=document.querySelector("#testimoCont2");
const testimoCont3=document.querySelector("#testimoCont3");
const TWtotalSild=document.querySelector("#TWtotalSild");
const WWidth=window.innerWidth;

if(WWidth > 768){
	// active 2
function abSlidAddC(){
	testimoCont2.classList.add("TMLCActive");
	setTimeout(function(){
		testimoCont2.classList.remove("TMLCActive");
	},1500)
}

let testimoaddC =setInterval(abSlidAddC,3000);



function aboutSlid(){
	let abuteSlideContaint=testimoCont2.classList.contains("TMLCActive");
	if(abuteSlideContaint){
		testimoCont1.style.left="-47%";
		testimoCont2.style.left="5%";
		testimoCont3.style.left="53%";
	}else{
		testimoCont1.style.left="5%";
		testimoCont2.style.left="53%";
		testimoCont3.style.left="100%";
	}
	
};

 let testimoPosition=setInterval(aboutSlid,2000)

// mouse hove delet function
TWtotalSild.onmouseover = function(event) {
  clearInterval(testimoaddC)
  clearInterval(testimoPosition)
};
TWtotalSild.onmouseout = function(event) {
   testimoaddC =setInterval(abSlidAddC,3000);
   testimoPosition=setInterval(aboutSlid,2000)
};

}else{

}




// contact page


let contactinp1=document.querySelector("#contactinp1");
let contactinp2=document.querySelector("#contactinp2");
let contactinp3=document.querySelector("#contactinp3");
let contactinpAll=document.querySelectorAll("#contactinp1,#contactinp2,#contactinp3");
let contactBtn=document.querySelector(".contactOption");

contactinpAll.forEach(function(value,index){
	value.addEventListener("focus",function(){
		this.setAttribute("style","border-color:var(--green)")
	});
});
contactinpAll.forEach(function(value,index){
	value.addEventListener("blur",function(){
		this.removeAttribute("style","border-color:var(--green)")
	});
});
contactBtn.addEventListener("submit",function(event){
	event.preventDefault()
	alert("We are extremely Sorry ! Our message sent option is under construction. Please try some time later ");
	
});












// responsive settings
//menu
let respBtn=document.querySelector("#respBtn");
let menuBar=document.querySelector("#menuBar");

respBtn.addEventListener("click",function(){
	menuBar.classList.toggle("resMenuActv")

});


// about page 
about.addEventListener("click",function(){
	
	menuBar.classList.remove("resMenuActv")
});
testimoCont1.classList.add("abSlidBlock");
function abSlid(){
	
	setTimeout(function(){
		if(TBox1.classList.contains("abSlidBlock")){
		testimoCont1.classList.remove("abSlidBlock");
		testimoCont2.classList.add("abSlidBlock");
		testimoCont1.classList.add("abSlidhidd");

		}
	},2000);
	

	setTimeout(function(){
		if(testimoCont2.classList.contains("abSlidBlock")){
		testimoCont2.classList.remove("abSlidBlock");
		testimoCont3.classList.add("abSlidBlock");
		testimoCont2.classList.add("abSlidhidd");
		
		}
	},4000);

	setTimeout(function(){
		if(testimoCont3.classList.contains("abSlidBlock")){
		testimoCont3.classList.remove("abSlidBlock")
		testimoCont1.classList.add("abSlidBlock")
		testimoCont3.classList.add("abSlidhidd");
		
		}
	},6000);


	//
	setTimeout(function(){
		if(TBox1.classList.contains("abSlidBlock")){
		testimoCont1.classList.add("abSlidBlock");
		testimoCont1.classList.remove("abSlidhidd");

		}
	},6010);

	setTimeout(function(){
		if(testimoCont1.classList.contains("abSlidBlock")){
		testimoCont1.classList.remove("abSlidBlock");
		testimoCont2.classList.add("abSlidBlock");
		testimoCont2.classList.remove("abSlidhidd");
		
		}
	},8000);

	setTimeout(function(){
		if(testimoCont2.classList.contains("abSlidBlock")){
		testimoCont2.classList.remove("abSlidBlock")
		testimoCont3.classList.add("abSlidBlock")
		testimoCont3.classList.remove("abSlidhidd");
		
		}
	},10000);

	setTimeout(function(){
		if(testimoCont3.classList.contains("abSlidBlock")){
		testimoCont3.classList.remove("abSlidBlock");
		testimoCont1.classList.add("abSlidBlock");
		
		
		}
	},12000);
 

}
setInterval(abSlid,12010)







// resume page
resume.addEventListener("click",function(){
	
	menuBar.classList.remove("resMenuActv")
});
//portfolio page
portfolio.addEventListener("click",function(){
	
	menuBar.classList.remove("resMenuActv")
});
//blog page
blog.addEventListener("click",function(){
	
	menuBar.classList.remove("resMenuActv")
});
//contact page
contact.addEventListener("click",function(){
	
	menuBar.classList.remove("resMenuActv")
});

















