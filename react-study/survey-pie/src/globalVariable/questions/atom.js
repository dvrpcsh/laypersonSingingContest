import { atom } from 'recoil';

const questionsState = atom({
    key: 'questionsState',
    default: [
              {title: "질문1 입니다.", description: "설명입니다.", type:"text", options: {}, required: false},
              {title: "질문2 입니다.", description: "설명입니다.", type:"textarea", options: {placeholder: "placeholder 입니다."}, required: false},
              {title: "질문3 입니다.", description: "설명입니다.", type:"select", options: {items:['답변1','답변2','답변3','답변4','답변5']}, required: false}
             ]
});

export default questionsState;