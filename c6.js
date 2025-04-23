const sentencesManipulation = sentence => {
    let arr = sentence.split(" ");
    let vocals = 'aAiIuUeEoO';
    let result = [];

    arr.forEach(item => {
        if (vocals.includes(item[0])) {
            result.push(item);
        } else {
            result.push(`${item.slice(1)}${item[0]}nyo`);
        }
    })
    console.log(result.join(" ").toLowerCase());
};

sentencesManipulation('itik Makan Dengan orang utan Di sawah');
