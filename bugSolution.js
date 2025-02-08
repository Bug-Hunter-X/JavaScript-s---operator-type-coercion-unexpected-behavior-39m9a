function foo(a,b){
  if (typeof a !== 'number' || typeof b !== 'number'){
    a = Number(a);
    b = Number(b);
    if(isNaN(a) || isNaN(b)){
      return 'NaN';
    }
  }
  return a+b;}
console.log(foo(1,2));//Expected Output 3
console.log(foo(1,"2"));//Expected Output 3
console.log(foo(1,true));//Expected Output 2
console.log(foo(1,false));//Expected Output 1
console.log(foo(1,null));//Expected Output 1
console.log(foo(1,undefined));//Expected Output NaN
console.log(foo(1,{}));//Expected Output NaN
console.log(foo(1,[1,2,3]));//Expected Output NaN
console.log(foo(1,()=> {}));//Expected Output NaN