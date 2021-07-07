const express = require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');

const schema = buildSchema(`
    input AccountInput{
        name: String
        age: Int
        gender: String
        department: String
    }
    type Account{
        name: String
        age: Int
        gender: String
        department: String
    }
    type Mutation{
        createAccount(input: AccountInput): Account
        updateAccount(id: ID!, input: AccountInput): Account
    }
    type Query{
        accounts: [Account]
    }
`)

const fakeDB = {}

// 定义查询对应的处理器
const root = {
    account(){
        var arr = [];
        for(const key in fakeDB){
            arr.push(fakeDB[key])
        }
        return arr;
    },
    // 相当于数据库的保存
    createAccount({input}){    
        console.log(input);
        fakeDB[input.name] = input;
        console.log(fakeDB)
        // 返回保存结果
        return fakeDB[input.name];
    }, 
    // 相当于更新数据库
    updateAccount({id, input}){
        const updatedAccount = Object.assign({}, fakeDB[id], input);
        // 更新
        fakeDB[id] = updatedAccount;
        return updatedAccount;
    }
}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000)