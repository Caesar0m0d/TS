var array = new Array(4);
  for (var i = 0; i < array.length; i++) {
    array[i] = new Array(2);
    for (var j = 0; j < array[i].length; j++) {
      array[i][j] = j;
	  console.log(array[i][j]);
    }
  }