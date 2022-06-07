let ourDataset=[]
function generateJsonData(number){
    let dataset=[]
    let UserIds=Array.from({length: 100}, (_, i) => i + 1)
    let PageTitle=['A','B','C','D','E','F','G','H','I','J']
    for(let i=0; i<number; i++){
        let entry={"Timestamp":randomDate(new Date(Date.UTC(2022,00,01,00,00,00,00,00,00,00)), new Date(Date.UTC(2022,00,02,00,00,00,00,00,00,00))),
                   "userID":UserIds[Math.floor(Math.random() * UserIds.length)],
                   "pageTitle":PageTitle[Math.floor(Math.random() * PageTitle.length)]}
        dataset.push(entry)}
    return dataset
}
ourDataset=generateJsonData(1000)
console.log(ourDataset)
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function getPageTitles(array) {
   let titlearray=[]
   for(let i = 0; i < array.length; i++) {
      titlearray.push(array[i].pageTitle)
   }
   let counts={}
   for (const num of titlearray) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
   }
   let answer=[counts['A'],counts['B'],counts['C'],counts['D'],counts['E'],
               counts['F'],counts['G'],counts['H'],counts['I'],counts['J']]
   return answer
}

function seperateTimeStamps(array){
    let mornings=0
    let evenings=0
    let nights=0
    for(let i = 0; i < array.length; i++) {
      let timeDifference=Number(new Date(Date.UTC(2022,00,02,00,00,00,00,00,00,00)).getTime() - array[i].Timestamp)
      console.log(timeDifference)
      if(28800000>timeDifference){
          nights++;
      }else if (57600000>=timeDifference && timeDifference>=28800000){
          evenings++;
      }else if (86400000>=timeDifference && timeDifference>57600000){
          mornings++;
      }
    }
    timesInterval=[mornings,evenings,nights]
    return timesInterval
}

const labels1 = ['A','B','C','D','E','F','G','H','I','J'];
const labels2=['mornings','evenings','nights']

const TitleValues=getPageTitles(ourDataset)
const getIntervals=seperateTimeStamps(ourDataset)
console.log(getIntervals)
const data1 = {
    labels: labels1,
    datasets: [{
      label: 'Value of Page Titles on 1/1/2022',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data:TitleValues,
    }]
  };
const data2={
    labels: labels2,
    datasets: [{
      label: 'Times when the pages are most visited',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data:getIntervals,
    }]
  };
const config1 = {
    type: 'bar',
    data: data1,
    options: {}
  };
const config2 = {
    type: 'bar',
    data: data2,
    options: {}
  };

var myChart = new Chart("myChart", config1);
var myChart2 = new Chart("myChart2", config2);