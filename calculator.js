  function click1() 
 {
  let a = document.getElementsByName("price");
  let b = document.getElementsByName("num");
  if ((/^(0|[1-9]\d*)$/.test(a[0].value)) && (/^(0|[1-9]\d*)$/.test(b[0].value))) 
  {
  let r = document.getElementById("res");
  r.innerHTML = a[0].value * b[0].value;
  return false;
  }
  else 
  {
	  alert("Ты ввел что-то непонятное");
	  return false;
	}
  }

 window.addEventListener("DOMContentLoaded", function (event) 
 {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button1");
    b.addEventListener("click", click1);
  });
