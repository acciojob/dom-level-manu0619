//your JS code here. If required.
a=document.getElementsByTagName('li');
i=0;
while(a[i].id!=='level' && a[i]){
	i++;
}
console.log("The level of element is",i);