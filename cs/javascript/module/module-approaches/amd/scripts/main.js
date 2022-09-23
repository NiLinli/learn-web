requirejs(["helper/util"],function(util){
	//This function is called when scripts/helper/util.js is load.
	//If util.js calls define(), then this function is not fired until
	//Util's dependencies have loaded, and the util argument will hold the module value for 'helper/util'.

	console.log('success')
	console.log(util.add(1,2));
});