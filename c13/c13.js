// const txt = process.argv[2];
// const { readFileSync, writeFileSync } = require('node:fs');


// const reading = () => {
//     return JSON.parse(readFileSync('data2.json', 'utf-8'))
// }

// const writing = (value) => {
//     writeFileSync('data2.json', JSON.stringify(value), 'utf-8')
// }

// const data = reading();

// switch (txt) {
//     case "list":
//         console.log(`daftar kerjaan:`);
//         data.forEach((item, index) => {
//             console.log(`${index + 1}. [${item.complete ? 'X' : ' '}] ${item.title}`);
//         });
//         break;

//     case "task":
//         const txt1 = process.argv[3] - 1;
//         console.log(`daftar kerjaan task ${txt1 + 1}: \ntask content: ${data[txt1].title} \ncomplete: ${data[txt1].complete ? 'done' : 'not yet'}\ntags: ${data[txt1].tags}`);
//         break;

//     case "add":
//         const save = process.argv.splice(3, 10).join(" ");
//         data.push({title: save, complete: false, tags: []});
//         writing(data);
//         console.log(`"${save}" telah ditambahkan.`);
//         break;

//     case "delete":
//         const txt2 = process.argv[3] - 1;
//         console.log(`"${data[txt2].title}" telah dihapus dari daftar`);
//         data.splice(txt2, 1);
//         writing(data);
//         break;

//     case "complete":
//         const txt3 = process.argv[3] - 1;
//         data[txt3].complete = true;
//         writing(data);
//         console.log(`"${data[txt3].title}" telah selesai`);
//         break;

//     case "uncomplete":
//         const txt4 = process.argv[3] - 1;
//         data[txt4].complete = false;
//         writing(data);
//         console.log(`"${data[txt4].title}" status selesai dibatalkan`);
//         break;

//     case "list:outstanding":
//         const txt5 = process.argv[3];
//         console.log(`daftar pekerjaan:`);
//         if (txt5 === 'asc') {
//             for (let i = 0; i < data.length; i++) {
//                 if (data[i].complete === false) {
//                     console.log(`${i + 1}. [${data[i].complete ? 'X' : ''}] ${data[i].title}`);
//                 }
//             }
//         } else {
//             for (let i = data.length - 1; i >= 0; i--) {
//                 if (data[i].complete === false) {
//                     console.log(`${i + 1}. [${data[i].complete ? 'X' : ''}] ${data[i].title}`);
//                 }
//             }
//         };
//         break;

//     case "list:completed":
//         const txt6 = process.argv[3];
//         console.log(`daftar pekerjaan:`);
//         if (txt6 === 'asc') {
//             for (let i = 0; i < data.length; i++) {
//                 if (data[i].complete === true) {
//                     console.log(`${i + 1}. [${data[i].complete ? 'X' : ''}] ${data[i].title}`);
//                 }
//             }
//         } else {
//             for (let i = data.length - 1; i >= 0; i--) {
//                 if (data[i].complete === true) {
//                     console.log(`${i + 1}. [${data[i].complete ? 'X' : ''}] ${data[i].title}`);
//                 }
//             }
//         };
//         break;

//     case "tag":
//         const txt7 = process.argv[3] - 1;
//         const txt8 = process.argv.splice(4, 10);
//         txt8.forEach(items => data[txt7].tags.push(items))
//         writing(data)
//         console.log(`Tag '${txt8}' telah ditambahkan ke daftar '${data[txt7].title}'`)
//         break;

//     default:
//         const txt9 = process.argv[2];
//         if (txt9) {
//             console.log('daftar pekerjaan:')
//             result = txt9.split(":");
//             data.forEach((items, index) => {
//                 if (items.tags.includes(result[1])) {
//                     console.log(`${index + 1}. [${items.complete ? 'X' : ''}] ${items.title}`);
//                 }
//             })
//         } else {
//             console.log(`
// >>> JS TODO <<<
// $ node todo.js <command>
// $ node todo.js list
// $ node todo.js task <task_id>
// $ node todo.js add <task_content>
// $ node todo.js delete <task_id>
// $ node todo.js complete <task_id>
// $ node todo.js uncomplete <task_id>
// $ node todo.js list:outstanding asc|desc
// $ node todo.js list:completed asc|desc
// $ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
// $ node todo.js filter: <tag_name>
//          `);
//         }
//         break;
// }

