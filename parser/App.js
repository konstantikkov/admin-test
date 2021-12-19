const fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'asset', 'asset.txt');

let question_json = []

fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
    let stringed_data = data.replace(/[\r\n]+/g, '')
    stringed_data = stringed_data.replace(/<table>(.*?)<\/table>/g)
    const questions = stringed_data.match(/<li><h3>(.*?)<\/h3><ul>(.*?)<\/ul><\/li>/g)
    //console.log(questions.length)
    questions.forEach((question) => {
        //console.log(question)
        const header = question.match(/<h3>(.*?)<\/h3>/g)
        //console.log(header)
        const figure = question.match(/<figure(.*?)<\/figure>/g)
        //console.log(figure)
        let src = null
        if(figure){
            const src_ = question.match(/src="(.*?)"/g)
            //const img = src_[0].match(/"(.*?)"/)
            console.log(src_[src_.length - 1].replace(/src="/, '').replace(/"/, ''))
            src = src_[src_.length - 1].replace(/src="/, '').replace(/"/, '')
        }

        const question_ul = question.match(/<ul>(.*?)<\/ul>/g) || []
        //console.log(question_ul.length)

        let answer = []
        let questions = []

        const question_li = question_ul[0].match(/<li>(.*?)<\/li>/g) || []

        question_li.forEach((li, key) => {
            if(li.match(/<span/)){
                answer.push(key)
            }
            questions.push(li)
        })

        question_json.push({
            header: header,
            answer: answer,
            questions: questions,
            src: src
        })
    })
    let json = JSON.stringify(question_json);

    json = json.replace(/<table(.*?)>(.*?)<\/table>/g, '')
    json = json.replace(/<span(.*?)>/g, '')
    json = json.replace(/<\/span>/g, '')
    json = json.replace(/<h3>/g, '')
    json = json.replace(/<\/h3>/g, '')
    json = json.replace(/<p>/g, '')
    json = json.replace(/<\/p>/g, '')
    json = json.replace(/<br>/g, '')
    json = json.replace(/<\/br>/g, '')
    json = json.replace(/<\/li>/g, '')
    json = json.replace(/<li>/g, '')
    json = json.replace(/<\/ul>/g, '')
    json = json.replace(/<ul>/g, '')
    //&nbsp
    json = json.replace(/&nbsp;/g, ' ')
    fs.writeFile(path.join(__dirname, 'asset', 'asset.json'), json, (err) => {
        if (!err) {
            console.log('done');
        }
    });
})
