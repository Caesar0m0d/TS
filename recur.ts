var arr:number[] = new Array(10);
var i:number, tmp:number , rtn:number = -1;

for(i=0;i<10;i++){
	arr[i] = i*2;
}
for(i=0;i<10;i++){
	//console.log(arr[i]);
}
function bs(dest:number) : number{
	if(!dest)return 0;
	console.log(dest);
	bs(dest-1);
	return 0;
}

//console.log(bs(9));
bs(4);