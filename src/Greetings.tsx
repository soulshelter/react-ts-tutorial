import React from 'react';

// props를 선언
// type 대신에 interface를 사용할 수 있지만 프로젝트 내에선 통일하기를 권장
type GreetingProps = {
    name: string;
    mark: string;
    // 컴포넌트에 생략할 수있는 props 설정하기
    optional?: string;
    // 아무것도 리턴하지 않는 onClick 함수 생성
    onClick: (name: string) => void;
};

const Greetings = ({ name, mark, optional, onClick }: GreetingProps) => {
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    )
};


// default값 설정
Greetings.defaultProps = {
    mark: '!'
};

export default Greetings;