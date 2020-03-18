import React from 'react';

type GreetingProps = {
    name: string;
    mark: string;
};

const Greetings = ({ name, mark }: GreetingProps) => (
    <div>
        Hello, {name} {mark}
    </div>
);


// default값 설정
Greetings.defaultProps = {
    mark: '!'
};

export default Greetings;