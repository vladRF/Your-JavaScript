function randomShuffle(arr){
    //console.log(arr.length)

    var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	console.log(arr) ;
}


randomShuffle([1, 2, 3, 4, 5]);