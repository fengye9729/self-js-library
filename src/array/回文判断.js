// 回文判断
const num = 123456654321;
const str = 'abababababab';
const handle = params => {
    let str_1 = String(params).replace(/[^0-9A-Za-z]/g, '').toLowerCase()
    let str_2 = str_1.split('').reverse().join()
    return str_1 === str_2 ? true : false
}
handle(num) // true
handle(str) // false
