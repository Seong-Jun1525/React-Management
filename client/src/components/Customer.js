import React from 'react';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import CustomerDelete from './CustomerDelete';

class Customer extends React.Component { // React.Component 라이브러리이자 일종의 class라고 할 수 있음
    render() { // render() 함수는 출력될 내용을 return하는 형태로 작성해야함
        return (
            // <div>
            //     {/* jsx문법의 특징은 기본적으로 내부 데이터가 2개 이상인 경우
            //     반드시 div tag와 같은 것으로 묶어서 사용해야 함. */}
            //     <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
            //     <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
            // </div>
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt='profile' /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                <TableCell>
                    <CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/>
                </TableCell>
            </TableRow>
        )
    }
}

// class CustomerProfile extends React.Component {
//     render() {
//         return (
//             <div>
//                 <img src={this.props.image} alt='profile' />
//                 <h2>{this.props.name} ({this.props.id})</h2>
//             </div>
//         )
//     }
// }

// class CustomerInfo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.birthday}</p>
//                 <p>{this.props.gender}</p>
//                 <p>{this.props.job}</p>
//             </div>
//         )
//     }
// }

export default Customer;