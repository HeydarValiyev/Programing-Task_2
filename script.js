// let fullName = 'Heyder Veliyev Muzeffer';

// 1) Split the full name into an array of characters
// let nameArray = fullName.split('');

// 2) Algorithm to move the last name to the front in the full name
// let reversedFullName = fullName.split(' ');
// reversedFullName = [reversedFullName[1], reversedFullName[0]].concat(reversedFullName.slice(2)).join(' ');

// 3) Convert the new array to a string
// let reversedString = nameArray.join('');

// console.log('Full Name: ', fullName);
// console.log('Last Name First: ', reversedFullName);
// console.log('Array to String: ', reversedString);


let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

//4
// let arr1 =arr.filter((item,index) => item === 5)
// console.log(arr1.length);

//5
// let sum = 0 
// arr.map((item,index) => sum = sum + item)
// console.log(sum);

//6
// console.log(arr.sort());

//7
// let maximumnumber = Math.max(...arr)
// console.log(maximumnumber);
// let repeat = arr.filter(item => item == maximumnumber)
// console.log(repeat);

// 8
// let name = 'Heyder'
// let num = name.length
// let result = arr.includes(num, arr)
// console.log(result);
// console.log(name.length);

// 10
// let Maxnum = Math.max(...arr)
// let indexmaxnum = arr.indexOf(Maxnum)
// console.log(Maxnum);
// console.log(indexmaxnum);

//13
// let arr2 = arr.filter((item,index) => item > 2)
// console.log(arr2);
// console.log(arr.length - arr2.length);


let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
   name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]

//16
// function objects(arr2,name,t) {
//     return arr2.filter(obj => obj[name].startsWith(t));
// }
// let result = objects(arr2,'name','t')
// console.log(result);

//17
// function object(arr2,name,t){
//     return arr2.filter(obj => obj[name].startsWith(t) && obj[name].endsWith(t))
// }
// let result = object(arr2,'name','t')
// console.log(result);

18//
// function CemKey(arr2) {
//     return arr2.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t')).reduce((sum, obj) => sum + obj.key, 0);
// }
// console.log(CemKey(arr2));


