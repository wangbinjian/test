/*点击事件 点击过后切换车辆图片*/
var cars = document.querySelectorAll(".btn_color");
var cars_src = document.getElementById("imgs");
console.log(cars.length);
for(var j = 0 ; j < cars.length ; j++){
    cars[j].onclick=function(z){
        return function(){
            cars_src.src="images/car0"+(z+1)+".png";
        }
    }(j)
}