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
let list3: Array<String> = ["a", "b", "c"];
//元组，元素类型可以不同
//declare
let tuple1: [string, number];
//initialize
tuple1 = ["hello", 10];
console.log(tuple1[1]);
//当访问一个越界的元素，指定的类型 => true ,其他类型 => false
//在ts2.7之后，元组定义为有限长度的数组了，因此无法越界

//枚举:为一组数值赋予友好的名字
// enum Color {green , red ,blue}
// let c:Color = Color.blue
// console.log(c) // 2
enum Color {
  green = 2,
  red = 6,
  blue = 10
}
let c: Color = Color.blue;
console.log(c); //10

//Any:不清楚变量类型的时候，暂时使用 any 来标记，以此来通过编译
let notSure: any;
notSure = 4; //okay
notSure = "four"; //okay
notSure = true; //okay
//可以调用任意方法
//notSure.ifItExists(); // okay
//notSure.toFixed(); // okay
//不同类型的数组
let listX: any[] = [1, "one", true];

//Void:表示没有任何类型，通常用于一个没有返回值的函数
//声明类型为 Void 的变量，只能赋值为 undefined or null
let funcWarn = (): void => {
  console.log("nothing returns");
};

//Null / Undefined
let n: null = null;
let u: undefined = undefined;

//Never:表示那些永不存在的值的类型
//never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
function error(message:string):never{
    throw new Error(message)
}

