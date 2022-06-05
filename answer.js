function generateJsonData(number){
    let dataset=[]
    let UserIds=Array.from({length: 100}, (_, i) => i + 1)
    let PageTitle=['A','B','C','D','E','F','G','H','I','J']
    for(let i=0; i<number; i++){
        let entry={"Timestamp":randomDate(new Date(Date.UTC(2022,00,01,00,00,00,00,00,00,00)), new Date(Date.UTC(2022,00,02,00,00,00,00,00,00,00))),
                   "userID":UserIds[Math.floor(Math.random() * UserIds.length)],
                   "PageTitle":PageTitle[Math.floor(Math.random() * PageTitle.length)]}
        dataset.push(entry)
     }
    console.log(dataset)
    return dataset
}
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
generateJsonData(1000)