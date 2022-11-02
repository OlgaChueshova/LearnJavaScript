function Worker(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.getSalary = function () {
        return `salary: ${rate * days}`;
    }
}

const worker = new Worker('Ольга', 'Чуешова', 30, 20);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());


class MyString {
    constructor(word) {
        this.word = word;
    }
    reverse() {
        return this.word
            .split('')
            .reverse()
            .join('')
    }
    ucFirst() {
        return this.word[0].toUpperCase() + this.word.slice(1);
    }
    ucWords() {
        return this.word
            .split(' ')
            .map(letter => letter[0].toUpperCase() + letter.slice(1, letter.length))
            .join(' ')
    }
}

const str = new MyString('abcde');

console.log(str.reverse());
console.log(str.ucWords('abcde'));

const str3 = new MyString('abcde abcde abcde')

const str2 = str.ucWords.call(str3);

console.log(str2);