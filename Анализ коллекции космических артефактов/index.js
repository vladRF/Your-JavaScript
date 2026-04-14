const artifacts = {
    A101: { type: "метеорит", year: 1890, exhibits: 15 },
    A102: { type: "луноход", year: 1973, exhibits: 20 },
    A103: { type: "скафандр", year: 1969, exhibits: 12 },
    A104: { type: "спутник", year: 1957, exhibits: 20 },
    A105: { type: "луноход", year: 1971, exhibits: 10 },
};



function analyzeArtifacts(artifacts) {
    let numberImpressions = []; // количество показов
    let numberArtifactsType = []

    for (let key in artifacts) {
        console.log(`Артефакт ${key}: Тип - ${artifacts[key].type}, Год - ${artifacts[key].year}, Показы - ${artifacts[key].exhibits}`)
        numberImpressions.push(artifacts[key].exhibits)
    }

    console.log()   // пустая строка в выводе
    console.log(`Артефакты с наибольшим количеством показов (количество показов ${Math.max(...numberImpressions)}): `)

    for (let i in artifacts) {
        if (artifacts[i].exhibits === Math.max(...numberImpressions)) {
            //largestNumberImpressions.push(artifacts[i])
            console.log(`${i}: Тип - ${artifacts[i].type}, Год - ${artifacts[i].year}`)
        }
    }

    console.log() 
    console.log(`Количество артефактов по типу:`) 

    for (let j in artifacts){
        numberArtifactsType.push(artifacts[j].type)

    }
    console.log(numberArtifactsType)

    
}

analyzeArtifacts(artifacts)

