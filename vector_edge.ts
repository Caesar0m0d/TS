var vec = new Array(4);// closer to init vector
var i:number,j:number;
//1-3 2-3
for(i=0;i<4;i++){
	vec[i] = new Array();
}
vec[1].push(3);vec[3].push(1);
vec[2].push(3);vec[3].push(2);
for(i=0;i<4;i++){
	for(j=0;j<vec[i].length;j++){
		console.log(i+' '+j+' '+vec[i][j]);
	}	
}