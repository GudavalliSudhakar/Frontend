console.log("sudha")
let person ={
    name:'sai',
    age:27,
    greet: function(){
        console.log(`Hello,my name is ${this.name}.And I am ${this.age} year old`)
    }
};

person.greet();

function createBook(title,author) {
    return {
        title:title,
        author:author,
        describe:function() {
            console.log(`"${this.title}" by ${this.author}`)
        }
    }
} 
let book1 = createBook('1984','George Orwell');
let book2 = createBook('Brave New World','Aldous Huxley');
book1.describe();
book2.describe();

for (let i = 0 ; i<10; i++) {
    console.log(i);
}

let j = 0
while (j<10) {
    console.log(j);
    j++;
}

let z = 0;
do {
    console.log(z);
    z++;
}while(z<10);

let persons ={
    name:'syam',
    age:20
};
for (let key in persons) {
    console.log(key + ":" + persons[key]);
}

let arr = [10,20,30];
for (let value of arr) {
    console.log(value);
}