
function getTotal(){
	var getNumber1 = document.getElementById("f_number").value;
	var getNumber2 = document.getElementById("s_number").value;
	var total = document.getElementById("total");
	var results = parseInt(getNumber1) + parseInt(getNumber2); 
	total.value = results;
	
}

