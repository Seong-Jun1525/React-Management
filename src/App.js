import logo from './logo.svg';
import './App.css';
// 실제로 html의 body tag에 해당하는 내용. 실질적으로 웹사이트에 출력해주는 내용
function App() {
  return (
    // react에서는 jsx문법을 사용함. 그래서 class 뒤에 Name을 붙여야함.
    <div className='gray-background'>
      <img src={logo} lat='logo' />
      <h2>Let's develop management system!</h2>
    </div>
  );
}

export default App;
