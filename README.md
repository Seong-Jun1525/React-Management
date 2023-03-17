## Management System
본 프로젝트는 나동빈의 유튜브 React 강의를 시청하고 만든 고객 관리 시스템입니다.
(Management System)

## 공부 내용
### 4강
React 라이브러리 자체는 html 웹 문서를 효과적으로 보여주기 위한 라이브러리입니다.
그래서 컴포넌트 개념이 사용 됩니다.<br />
`컴포넌트란 웹 문서에서 어떠한 내용을 보여주기 위한 기본적인 단위.`

`react에서는 일반적으로 데이터를 출력하고자 할 때 프록스를 이용함.` 말 그대로 속성이란 의미.
```javascript
const customer = {
  'name' : '홍길동',
  'birthday' : '000429',
  'gender' : '남자',
  'job' : '대학생'
}
```

### 5강
보여줘야할 데이터가 많은 경우
```javascript
const customer = {
  'name' : '홍길동',
  'birthday' : '000429',
  'gender' : '남자',
  'job' : '대학생'
}
```
이런식이 아닌 분리를 해주면 됨.
계층적으로 구성해서 각각의 컴포넌트들을 분리합니다.<br />
`컴포넌트의 내용을 적절히 분해하면 관리하기 쉬워지고 생산성도 높아짐.`

**바뀐 App.js 코드**
```javascript
const customer = {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '000429',
  'gender' : '남자',
  'job' : '대학생'
}
```

```javascript
class App extends Component {
  render() {
    return (
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}
```
**바뀐 Customer.js 코드**
```javascript
class Customer extends React.Component {
    render() { 
        return (
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt='profile' />
                <h2>{this.props.name} ({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}
```

**map을 사용하여 여러 데이터를 출력하기(App.js)**
```javascript
const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '123123',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '바보',
    'birthday' : '456456',
    'gender' : '남자',
    'job' : '프로그래머'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '멍청이',
    'birthday' : '789789',
    'gender' : '여자',
    'job' : '디자이너'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}
```

## 6강
React에서는 bootstrap보다 Material UI가 더 선호 됨.

**바뀐 Customer.js**
```javascript
import React from 'react';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';

class Customer extends React.Component {
    render() { 
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt='profile' /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
    }
}
export default Customer;
```

**바뀐 App.js**
```javascript
import { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
  root: {
    width : '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
    
  },
  table:{
    minWidth:1080
  }
})

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '123123',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2', 
    'name' : '바보',
    'birthday' : '456456',
    'gender' : '남자',
    'job' : '프로그래머'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3', 
    'name' : '멍청이',
    'birthday' : '789789',
    'gender' : '여자',
    'job' : '디자이너'
  }
]
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => {
                return (
                  <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                  />
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
```

## 7강
6강까지의 내용은 서버와 클라이언트 중에서 클라이언트에 해당 됨.
클라이언트와 서로 데이터를 주고받을 수 있는 API 역할을 수행하는 nodejs를 구축하는 것이 학습 목표.

root 폴더에 client폴더를 만들고 지금까지 작업한 클라이언트 파일들을 넣어준다.
그리고 package.json파일을 만들어서 서버와 클라이언트를 동시에 실행시킬 수 있도록 처리함.

**package.json**
```json
{
    "name": "management",
    "version": "1.0.0",
    "scripts": {
        "client": "cd client && yarn start",
        "server": "nodemon server.js",
        "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
    },
    "dependencies": {
        "body-parser": "^1.20.2",
        "express": "^4.18.2"
    },
    "devDependencies": {
        "concurrently": "^7.6.0"
    }
}
```

**server.js**
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true | false}));

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
```

```
터미널에서 node server.js를 입력하여 제대로 동작하는지 체크한다.
이때 express나 body-parser 같은 module을 찾을 수 없다는 에러가 발생하면
npm install 명령으로 다운받아야 한다.
```



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
