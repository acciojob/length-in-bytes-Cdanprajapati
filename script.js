const byteSize = (str) => {
	const varOcg = new TextEncoder().encode(str);
	  return varOcg.length;
};

// Do not change the code below
// const str = prompt("Enter some string.");
alert(byteSize(str));
