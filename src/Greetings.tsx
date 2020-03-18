import React from 'react';

type GreetingProps = {
    name: string;
    mark: string;
    // 컴포넌트에 생략할 수있는 props 설정하기
    optional?: string;
};

const Greetings = ({ name, mark, optional }: GreetingProps) => (
    <div>
        Hello, {name} {mark}
        {optional && <p>{optional}</p>}
    </div>
);


// default값 설정
Greetings.defaultProps = {
    mark: '!'
};

export default Greetings;