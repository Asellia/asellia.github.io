<script>
const sidebar_links = document.querySelectorAll(".links .link");

document.querySelector(".sidebar .toggle-btn").addEventListener("click",function(){
	document.querySelector(".sidebar").classList.toggle("active");
  document.querySelector(".mainpanel").classList.toggle("active");
  });
  
function changeLink() {
  sidebar_links.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");
  let element = document.getElementById("Mainbody");
  let element2 = document.getElementById("Mainimage");
  let elementid = this.id
  switch(elementid)
  {
  	case "link1":
    	element2.innerHTML = "";
      element.innerHTML = "<br><font color=red size=15>A Fiery Hound<font>"
      element.innerHTML += "<br><br><font size=4>A wolf-woman who stands at a tall six-foot-two. Skin almost ashy in color, but still with the usual tinge of life. Whether it be short fur, or just oddly toned skin, it's hard to say. Her tail quite thick, and fur upkept, but not amazingly so. Her muscles are quite defined, especially her abs. Sleek, black hair, rustled and messy reaches to her shoulders. Bright, orange eyes gaze back at you.<br><br>Her demeaner reflects a rough life-- one not afraid to get her hands dirty if she has to, and certainly one who does a lot of heavy lifting. Her lower legs were covered in a dark fur, ending with a perhaps dyed bright orange bit near the top. There's similar on her upper chest.</font>"
      break;   
    case "link2":
    	element2.innerHTML = "";
      element.innerHTML = "<br><font color=red size=15>A Fiery Hound<font>"
    	element.innerHTML += "<br><br>Often seen with a crop-top hiding her chest, but showing off her midsection -- her shorts clinging to her mid thighs, foreign in make. On her back is often a large sword that's more of a slab of metal that was sharpened than anything. A loose, white cloak often seen on her as well - especially in colder area.<br><br>In terms of armor, if she's expecting a fight, she'll be seen wearing iron bracers, greaves, as well as a chest guard.";
    	break;
    case "link3":
    	element2.innerHTML = "";
      element.innerHTML = "<br><font color=red size=15>A Fiery Hound<font>"
    	element.innerHTML += "<br><br>Not much is known about her, at the moment, other than she's often seen around Providence.";
    	break;
    case "link4":
    	element2.innerHTML = "<img src='https://i.imgur.com/qelEdt9.jpg'>";
      element.innerHTML = "";
    	break;
  }
} 

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));
</script>