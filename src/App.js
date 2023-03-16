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
    'image' : 'https://placeimg.com/64/64/1', // 랜덤으로 이미지를 보여주는 사이트. 64*64 크기로 보여줌.
    'name' : '홍길동',
    'birthday' : '123123',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2', // 랜덤으로 이미지를 보여주는 사이트. 64*64 크기로 보여줌.
    'name' : '바보',
    'birthday' : '456456',
    'gender' : '남자',
    'job' : '프로그래머'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3', // 랜덤으로 이미지를 보여주는 사이트. 64*64 크기로 보여줌.
    'name' : '멍청이',
    'birthday' : '789789',
    'gender' : '여자',
    'job' : '디자이너'
  }
]

// 실제로 html의 body tag에 해당하는 내용. 실질적으로 웹사이트에 출력해주는 내용
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      // react에서는 jsx문법을 사용함. 그래서 class 뒤에 Name을 붙여야함.
      // <div className='gray-background'>
      //   <img src={logo} lat='logo' />
      //   <h2>Let's develop management system!</h2>
      // </div>
      // 프록스를 이용하여 데이터를 전달
      // <Customer
      //   id={customer.id}
      //   image={customer.image}
      //   name={customer.name}
      //   birthday={customer.birthday}
      //   gender={customer.gender}
      //   job={customer.job}
      // />
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
                    key={c.id} // map을 쓸 때는 key props를 사용해야함.
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
