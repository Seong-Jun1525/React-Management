import React from 'react';

class Customer extends React.Component { // React.Component 라이브러리이자 일종의 class라고 할 수 있음
    render() { 
        return (
            <div>
                {/* jsx문법의 특징은 기본적으로 내부 데이터가 2개 이상인 경우
                반드시 div tag와 같은 것으로 묶어서 사용해야 함. */}
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

export default Customer;