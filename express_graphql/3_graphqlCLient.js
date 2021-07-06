const express = require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');

const schema = buildSchema(`
    type Account{
        name: String
        age: Int
        gender: String
        department: String
        salary(city: String): Int
    }
    type Query{
        getClassMates(classNo: Int!): [String]
        getAccount(userName: String): Account
    }
`)

const root = {
    getClassMates({classNo}){
        const obj = {
            31: ['Alice', 'Bob'],
            61: ['Trady', 'Enosh'],
        }
        return obj[classNo];
    },
    getAccount({userName}){
        const obj = {
            'Alice': {
                name: 'Alice',
                age: 18,
                gender: 'woman',
                department: 'ICN',
                salary: ({city})=>{
                    var salary;
                    switch(city){
                        case 'beijing': salary = 20000;break;
                        case 'shanghai': salary = 18000;break;
                        case 'shenzhen': salary = 16000;break;
                        default: salary = 15000;
                    }
                    return salary;
                }
            },
            'Bob': {
                name: 'Bob',
                age: 20,
                gender: 'man',
                department: 'CV',
                salary: ({city})=>{
                    var salary;
                    switch(city){
                        case 'beijing': salary = 22000;break;
                        case 'shanghai': salary = 20000;break;
                        case 'shenzhen': salary = 18000;break;
                        default: salary = 16000;
                    }
                    return salary;
                }
            }
        }
        return obj[userName];
    }
}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
//公开文件夹
app.use(express.static('public'))

app.listen(4000)