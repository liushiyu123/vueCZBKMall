 var arr=[];
 var arr2=[];

export  function localsetItem(_id,argu_market_price,_count){
	 var _boolean=false;
		var o={id:_id,market_price:argu_market_price,count:_count};
		var str=localStorage.getItem('str')||'[]';
		var arr3=JSON.parse(str);
		if (arr3.length<1) {
				arr.push(o);
				var arr1=JSON.stringify(arr);
				localStorage.setItem('str',arr1);
		}
		else {
			for(var i=0;i<arr3.length;i++){
				var item=arr3[i];
				if (item.id==_id) {
				_boolean=true;	
				item.count+=_count;
				var arr1=JSON.stringify(arr3);
		localStorage.setItem('str',arr1);
			}
				
			}
			if (!_boolean) {
				arr.push(o);
				var arr1=JSON.stringify(arr);
				localStorage.setItem('str',arr1);
			}
		}		
}
export function localgetItem(){
	var str=localStorage.getItem('str')||'[]';
	arr2=JSON.parse(str);
	return arr2;
}

export function removeItem(id){
	var str=localStorage.getItem('str')||'[]';
	arr2=JSON.parse(str); 
	for(var i=0;i<arr2.length;i++){
		var re_item=arr2[i];
		if (re_item.id==id) {
			arr2.splice(i,1);
		}
	}
}