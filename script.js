'use strict'




// let getNumber = (maxNumber) => {
//     let sum = 0;
//     for (let i = 0; i <= maxNumber; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(getNumber(5))

// let recursiveSum = (value) => {
//     if (value === 1) return value;
//     return value + recursiveSum(value - 1)
// };


// console.log(recursiveSum(1)); 
// console.log(recursiveSum(2));
// console.log(recursiveSum(3));

// let factorial = (value) => {
//     if (value === 1) return value;
//     return value * factorial(value - 1)
// }
const developmentTeam = {
    testing: [
        {
            name: 'Martina',
            salary: 2000,
        },
        {
            name: 'John',
            salary: 300,
        },
    ],
    developers: {
        backEnd: [
            {
                name: 'Olga',
                salary: 550,
            }
        ],
        frontEnd: [
            {
                name: 'Roger',
                salary: 1100,
            },
            {
                name: 'Kaly',
                salary: 1120,
            },
        ],
    }
}

let getSalary = (team) => {
    let sum = 0;
    team.forEach(item => {
        sum += item.salary;
    })
    return sum;
};

let getTeamSalary = (team) => {
    if (Array.isArray(team)) {
        return getSalary(team);
    } else {
        let sum = 0;
        for (let key in team) {
            sum += getTeamSalary(team[key]);
        }
        return sum;
    }
};

console.log(getTeamSalary(developmentTeam))


