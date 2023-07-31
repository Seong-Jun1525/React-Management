## Management System
본 프로젝트는 나동빈의 유튜브 React 강의를 시청하고 만든 고객 관리 시스템입니다.
(Management System)
## 공부 내용
### 1강
React를 사용하려면 Node.js가 필요<br />
cmd에서 node -v를 해서 버전을 확인할 수 있음<br />
cmd에서 폴더를 생성 후 cd 명령으로 해당 폴더에 가서<br />
npm install -g create-react-app 패키지를 설치<br />
-g옵션은 글로벌 형태를 뜻함. 글로벌 형태로 create-react-app 패키지를 설치하면<br />
다른 프로젝트에도 해당 패키지를 적용할 수 있음<br />
패키지를 설치한 후 create-react-app 프로젝트이름 으로<br />
해당 react 프로젝트가 생성 됨<br />
cd명령을 통해 해당 프로젝트로 가서 yarn start를 해서 만들어진 react앱을 실행함.<br />
(만약 yarn start가 실행이 안되면 npm install -g yarn을 실행)<br />

### 3강
App.js는 실질적으로 웹사이트에 내용 출력을 담당.<br />
기본적으로 react는 jsx문법이기 때문에 class의 이름을 줄 때는 className이라고 해야함.<br />
App.css는 웹사이트 메인부분의 디자인 담당.<br />
index.html의 root영역에 App.js의 내용이 출력 됨.<br />
이유는 index.js파일에 가면
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
이렇게 되어있는데 이것은 root영역에 App.js를 출력하라는 의미<br />

Git<br />
홈페이지에 들어가서 저장소를 만든다.<br />
저장소 경로를 복사한다.<br />
VSCode에 와서 수정된 내용을 commit해준다.<br />
터미널에서 
```bash
git remote add origin 해당경로
git push --set-upstream origin master
```
이후 git 저장소 홈페이지 새로고침

### 4강
React 라이브러리 자체는 html 웹 문서를 효과적으로 보여주기 위한 라이브러리입니다.
그래서 컴포넌트 개념이 사용 됩니다.<br />
`컴포넌트란 웹 문서에서 어떠한 내용을 보여주기 위한 기본적인 단위.`

`import란 특정한 라이브러리를 불러올 때 사용`<br />
`export란 다른 컴포넌트에서 현재 만든 컴포넌트를 사용할 수 있게 하기위해서 사용`
```javascript
import React from 'react';

export default Customer;
```

`react에서는 일반적으로 데이터를 출력하고자 할 때 프록스를 이용함.` 말 그대로 속성이란 의미.<br />
**App.js**
```javascript
const customer = {
  'name' : '홍길동',
  'birthday' : '000429',
  'gender' : '남자',
  'job' : '대학생'
}
class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    )
  }
}
```

**Customer.js**
```javascript
class Customer extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    )
  }
}
```
`기존의 코드보다 더 구조화 됨.`

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
                <CustomerProfile
                  id={this.props.id}
                  image={this.props.image}
                  name={this.props.name}
                />
                <CustomerInfo
                  birthday={this.props.birthday}
                  gender={this.props.gender}
                  job={this.props.job}
                />
            </div>
        )
    }
}
// 사용자의 ID값과 이미지 값을 랜더링하는 부분
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
// 남은정보 출력
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

map을 사용할 때는 key를 꼭 사용해야 한다
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
```
실제 이런 데이터는 클라이언트가 직접 가지고 있는 것이 아니고 필요할 때마다 서버에 요청을 해서 이러한 데이터를 받아와서 화면에 출력하는 것이다.
```

## 6강
React에서는 bootstrap보다 Material UI가 더 선호 됨.<br />
Material UI는 css를 잘 몰라도 사용가능!

Material UI를 사용하는 방법
```bash
npm install @material-ui/core
```
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

export default withStyles(styles)(App); // App에 withStyles를 적용한 형태로 내보내기
```
<a href="https://mui.com/material-ui/react-table/">material ui table 링크</a>


## 7강
6강까지의 내용은 서버와 클라이언트 중에서 클라이언트에 해당 됨.
클라이언트와 서로 데이터를 주고받을 수 있는 API 역할을 수행하는 nodejs를 구축하는 것이 학습 목표.

root 폴더에 client폴더를 만들고 지금까지 작업한 클라이언트 파일들을 넣어준다.
그리고 package.json파일을 만들어서 서버와 클라이언트를 동시에 실행시킬 수 있도록 처리함.

nodejs Express 서버를 환경설정
- package.json파일 생성(txt 파일로 생성해서 확장자 바꾸면 됌)

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

- root폴더에도 gitignore폴더를 복붙하기
- nodemon 설치하기
```bash
npm install -g nodemon
```

- 서버프로그램 작성하기
**server.js**
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000; // 서버의 포트번호: 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
// ""가 아닌 ``으로 해야지 문자안에 특수한 변수를 출력할 수 있음
```

```
터미널에서 node server.js를 입력하여 제대로 동작하는지 체크한다.
이때 express나 body-parser 같은 module을 찾을 수 없다는 에러가 발생하면
npm install 명령으로 다운받아야 한다.
```

## 8강
**yarn dev를 terminal에 입력하니 아래의 에러메시지가 뜬다.**
```
yarn : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Users\****\AppData\Roaming\npm\yarn.ps1 파일을 로드할 수 없습니다. 자세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID= 135170)를 참조하십시오.                                                                                                                                                                                  위치 줄:1 문자:1                                                                                                                                                                                         + yarn dev                                                                                                                                                                                               + ~~~~                                                                                                                                                                                                       + CategoryInfo          : 보안 오류: (:) [], PSSecurityException                                                                                                                                         + FullyQualifiedErrorId : UnauthorizedAccess
```
이럴 때는 vscode 기준으로 터미널에 get-help Set-ExcutionPolicy를 입력한다.<br />
그럼 vscode를 위한 PowerShell을 다운받으라는 페이지가 뜬다. 이때 이 PowerShell을 다운받으면 된다.

yarn을 -g로 설치를 하면 내 컴퓨터 사용자를 기준으로 설치가 됨.<br />
그러므로 사용자가 바뀐 경우면 다시 설치해야함.<br />

yarn이 설치가 되면 yarn이 설치가 된 경로를 복사해서 환경변수로 등록을 한다.

nodejs express를 활용하여 rest API를 구축하는 것이 학습 목표.
rest API는 서버와 클라이언트가 웹 프로토콜을 기반으로 하여 효과적으로 데이터를 주고받을 수 있도록 해줌.<br /><br />

JSONLint사이트에서 데이터를 넣어 정상적인 데이터인지 확인 가능

props는 변경될 수 없는 데이터를 명시할 때 사용<br />
state는 component내에서 변경될 수 있는 데이터를 처리하고자 할 때 사용<br />

**App.js**
```javascript
class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() { // api 서버에 접근을 해서 데이터를 받아오는 작업
    this.callApi()
    .then(res => this.setState({customers: res}))
    // then함수로 변수이름이 res라는 변수로 바뀜.
    // 그 값을 customers라는 변수 값에 넣는다는 의미.
    .catch(err => console.log(err));
  }

  callApi = async () => { // 비동기적
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

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
              this.state.customers ? this.state.customers.map(c => {
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
              }) : ""
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
```
```
componentDidMount()는 라이브러리라는 점에서 일종의 생명주기가 존재
모든 컴포넌트가 실제로 Mount가 완료가 되었을 때 실행되는 부분

react 컴포넌트가 구성되면 customers는 비어있는 상태이다.
그렇기 때문에 map함수를 바로 불러올 수 없다.
네트워크의 속도가 빠르더라도 비어있는 상태로 시작.
그래서 customers값이 존재하는 경우만 실행 될 수 있는 형태로 코딩해야함.
```

## 9강
```
React 라이브러리가 실행되는 순서
1) constructor() 불러옴

(컴포넌트가 Mount되기 전에)
2) componentWillMount() 함수가 불러와짐

3) render() 실제 컴포넌트가 화면에 그려짐

4) 이후에 componentDidMount() 함수가 불러와짐

props or state 변동되는 경우 => shouldComponentUpdate() 사용이 되어서
다시 render()함수를 불러서 view를 갱신 함.

비동기적으로 호출이 이루어지기 때문에 api서버에서 응답을 하지 않으면
사용자에게 로딩 화면만 출력이 되도록 설정해야 함.
```

**App.js**
```javascript
state = {
    customers: "",
    completed: 0
  }

  componentDidMount() { // api 서버에 접근을 해서 데이터를 받아오는 작업
    this.timer = setInterval(this.progress, 20);
    // 0.02초마다 한번씩 progress 함수가 실행될 수 있도록 설정
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  progress = () => {
    // eslint-disable-next-line no-unused-vars
    const { completed } = this.state;
    this.setState({completed: completed => 100 ? 0 : completed + 1})
  }

  render() {
    return (
        <TableBody>
          {
            this.state.customers ? this.state.customers.map(c => {
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
            }) :
            <TableRow>
              <TableCell colSpan={6} align='center'>
                <CircularProgress className={classes.progress} variant="indeterminate" value={this.state.completed} />
              </TableCell>
            </TableRow>
          }
        </TableBody>
    );
  }
```
네트워크 속도 때문에 progress bar를 확인을 못하는 경우
```javascript
this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
```
이 부분을 아예 주석처리하면 된다.