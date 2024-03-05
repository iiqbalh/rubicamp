const txt = process.argv[2];
const { readFileSync, writeFileSync } = require('node:fs');


const reading = () => {
    return JSON.parse(readFileSync('data2.json', 'utf-8'))
}

const writing = (value) => {
    return JSON.parse(writeFileSync('data2.json', value, 'utf-8'))
}

const data = reading();

switch (txt) {
    case "list":
        console.log(`daftar kerjaan:`)
        data.forEach(item, index => {
            console.log(`${index + 1}. [] ${item.title}`)
        });
        break;

    case "add":
        writing()
        break;

    default:
        console.log(`
 >>> JS TODO <<<
$ node todo.js <command>
$ node todo.js list
$ node todo.js task <task_id>
$ node todo.js add <task_content>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id>
$ node todo.js uncomplete <task_id>
$ node todo.js list:outstanding ascldesc
$ node todo.js list:completed ascldesc
$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
$ node todo.js filter: <tag_name>
  `)
        break;
}