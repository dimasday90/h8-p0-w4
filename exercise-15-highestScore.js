function highestScore (students) {
    var obj = {};
    for(var i = 0; i < students.length; i ++) {
        if(obj[students[i].class] === undefined) {
            obj[students[i].class] = {
                name: students[i].name,
                score: students[i].score
            };
        } else {
            if(obj[students[i].class] === students[i].class && obj[students[i].score] < students[i].score) {
                obj[students[i].class] = {
                    name: students[i].name,
                    score: students[i].score
                }
            }
        }
    }
    return obj;
}


console.log(highestScore([
{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
},
{
    name: 'Alexei',
    score: 85,
    class: 'wolves'
},
{
    name: 'Sergei',
    score: 74,
    class: 'foxes'
},
{
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
}
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
{
    name: 'Alexander',
    score: 100,
    class: 'foxes'
},
{
    name: 'Alisa',
    score: 76,
    class: 'wolves'
},
{
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
},
{
    name: 'Albert',
    score: 71,
    class: 'wolves'
},
{
    name: 'Viktor',
    score: 80,
    class: 'tigers'
}
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

console.log(highestScore([
    {
        name: 'Upin',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Ipin',
        score: 74,
        class: 'king'
    },
    {
        name: 'Jarjit',
        score: 70,
        class: 'foxes'
    },
    {
        name: 'Mei-Mei',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Ehsan',
        score: 70,
        class: 'tigers'
    },
    {
        name: 'Mail',
        score: 80,
        class: 'tigers'
    },
    {
        name: 'Susanti',
        score: 80,
        class: 'shark'
    },
    {
        name: 'Dzul',
        score: 85,
        class: 'gemini'
    },
    {
        name: 'Ijat',
        score: 85,
        class: 'gemini'
    },
    {
        name: 'Fizi',
        score: 70,
        class: 'king'
    }
    ]));