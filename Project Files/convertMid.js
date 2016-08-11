inlets = 1;
outlets = 1;



function convert(a)
{
	var aList = a.split(" ");
	var output = [];


	for(var i = 0; i < (aList.length); i++)
	{
		switch(aList[i])
		{
		case "65": output.push(57); break;
		case "66": output.push(59); break;
		case "67": output.push(60); break;
		case "68": output.push(62); break;
		case "69": output.push(64); break;
		case "70": output.push(65); break;
		}
	}
	

	var outputString = output.join(" ");
	
	outlet(0, output);
	
}