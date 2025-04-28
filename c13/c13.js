const { readFileSync, writeFileSync } = require('node:fs');
const path = readFileSync('data.json', 'utf-8');
const data = JSON.parse(path);


switch (process.argv[2]) {
    case 'add':
        const text = process.argv.splice(3, 10).join(" ")
        data.push({ title: text, compelete: false, tags: [] })
        writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8')
        console.log(`"${text}" telah ditambahkan.`)
        break;
    case 'list':
        console.log('Daftar Pekerjaan: ');
        data.forEach((item, index) => {
            console.log(`${index + 1}. [${item.compelete ? 'X' : ' '}] ${item.title}.`);
        });
        break;
    case 'delete':
        console.log(`'${data[process.argv[3] - 1].title}' telah dihapus dari daftar.`)
        data.splice(process.argv[3] - 1, 1);
        writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8')
        break;
    case 'task':
        console.log(`Task ${process.argv[3]}:\n
Title     : ${data[process.argv[3] - 1].title}
Completed : ${data[process.argv[3] - 1].compelete}
Tags      : ${data[process.argv[3] - 1].tags}`)
        break;
    case 'complete':
        data[process.argv[3] - 1].compelete = true;
        writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8')
        console.log(`"${data[process.argv[3] - 1].title}" telah selesai.`)
        break;
    case 'uncomplete':
        data[process.argv[3] - 1].compelete = false;
        writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8')
        console.log(`"${data[process.argv[3] - 1].title}" status selesai dibatalkan.`)
        break;
    case 'list:outstanding':
        if (process.argv[3] == 'asc') {
            for (let i = 0; i < data.length; i++) {
                if (data[i].compelete === false) {
                    console.log('Daftar Pekerjaan: ');
                    console.log(`${i + 1}. [${data[i].compelete ? 'X' : ' '}] ${data[i].title}.`);
                };
            };
        } else {
            for (let i = data.length; i > 0; i--) {
                if (data[i - 1].compelete === false) {
                    console.log('Daftar Pekerjaan: ');
                    console.log(`${i}. [${data[i - 1].compelete ? 'X' : ' '}] ${data[i - 1].title}.`);
                };
            };
        }
        break;
    case 'list:completed':
        if (process.argv[3] == 'asc') {
            for (let i = 0; i < data.length; i++) {
                if (data[i].compelete === true) {
                    console.log('Daftar Pekerjaan: ');
                    console.log(`${i + 1}. [${data[i].compelete ? 'X' : ' '}] ${data[i].title}.`);
                };
            };
        } else {
            for (let i = data.length; i > 0; i--) {
                if (data[i - 1].compelete === true) {
                    console.log('Daftar Pekerjaan: ');
                    console.log(`${i}. [${data[i - 1].compelete ? 'X' : ' '}] ${data[i - 1].title}.`);
                };
            };
        }
        break;
    case 'tag':
        let arr = process.argv.splice(4, 50)
        arr.forEach(item => {
            data[process.argv[3] - 1].tags.push(item);
        })
        writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8')
        console.log(`Tag '${arr.join(",")}' telah ditambahkan ke daftar '${data[process.argv[3] - 1].title}'`)
        break;

    default:
        let filter = process.argv[2].split(':')
        if (filter) {
            data.forEach((item, index) => {
                if (item.tags.includes(filter[1])) {
                    console.log('Daftar Pekerjaan:')
                    console.log(`${index + 1}. [${item.compelete ? 'X' : ' '}] ${item.title}.`);
                }
            })
        } else {
            console.log(`>>> JS TODO <<<
$ node todo.js <command>
$ node todo.js list
$ node todo.js task <task_id>
$ node todo.js add <task_content>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id>
$ node todo.js uncomplete <task_id>
$ node todo.js list:outstanding asc|desc
$ node todo.js list:completed asc|desc
$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
$ node todo.js filter: <tag_name>`);
        }
        break;
}