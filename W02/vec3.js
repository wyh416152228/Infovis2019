//constructor
Vec3 = function(x,y,z){
	this.x = x;
	this.y = y;
	this.z = z;
}

//add method
Vec3.prototype.add = function(v) {
	// body...
	this.x += v.x;
	this.y += v.y;
	this.z += v.z;
	return this;
}

//sum method
Vec3.prototype.sum = function() {
	// body...
	return this.x + this.y + this.z;
}

Vec3.prototype.min = function() {
   if (this.x > this.y){
   		if (this.y > this.z)
   			return this.z;
   		else
   			return this.y;
   	}
   	else  {
   		if(this.x > this.z)
   			return this.z;
   		else
   			return this.x;
   }
}

Vec3.prototype.mid = function() {
   if (this.x > this.y){
		if (this.y > this.z)
			return this.y;
		else{
			if(this.x > this.z)
		  		return this.z;
		  	else
   				return this.x;
   		}
   	}
   	else{
		if(this.x > this.z)
			return this.x;
		else 
			if(this.y > this.z)
				return this.z;
			else
   				return this.y;
   }
}

Vec3.prototype.max = function() {
   if (this.x > this.y){
   		if (this.x > this.z)
   			return this.x;
   		else
   			return this.z;
   	}
   	else{
   		if(this.y > this.z)
   			return this.y;
   		else
   			return this.z;
   }
}

// AreaOfTriangle = function(a,b,c){
	function AreaOfTriangle( a, b, c) {
	var side = [0,0,0];
	side[0] = Math.sqrt(Math.pow(a.x - b.x,2)+Math.pow(a.y - b.y,2) + Math.pow(a.z - b.z,2));
	side[1] = Math.sqrt(Math.pow(a.x - c.x,2)+Math.pow(a.y - c.y,2) + Math.pow(a.z - c.z,2));
	side[2] = Math.sqrt(Math.pow(c.x - b.x,2)+Math.pow(c.y - b.y,2) + Math.pow(c.z - b.z,2));
	if(side[0]+side[1]<=side[2] || side[0]+side[2]<=side[1] || side[1]+side[2]<=side[0]){
		return -1;
	}
	var p = (side[0]+side[1]+side[2])/2;
	var area = Math.sqrt(p*(p-side[0])*(p-side[1])*(p-side[2]));
	return area;
}

