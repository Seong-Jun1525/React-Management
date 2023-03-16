import { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

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
      <div>
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
      </div>
    );
  }
}

export default App;
