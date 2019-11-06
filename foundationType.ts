//布尔值
let isDone: boolean = false;
//数字
let decLi: number = 6;
let hexLi: number = 0xf00d;
//字符串
let myName: string = "Joseph";
myName = "zzz";
//数组，元素类型相同
/*
TypeScript像JavaScript一样可以操作数组元素。 
有两种方式可以定义数组。 
第一种，可以在元素类型后面接上 []，
表示由此类型元素组成的一个数组
*/
let list1: number[] = [1, 2, 3];
//第二种方式是使用数组泛型，Array<元素类型>
let list2: Array<Number> = [4, 5, 6];
let list3: Array<String> = ['a','b','c']
//元组，元素类型可以不同
//declare
let tuple1 :[string,number]
//initialize
tuple1 = ['hello',10]
console.log(tuple1[1])
