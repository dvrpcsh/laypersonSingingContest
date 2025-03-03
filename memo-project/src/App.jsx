import { useState } from 'react';
import TextInput from './component/TextInput'
import Select from './component/Select'

const contryOptions = [
    '한국',
    '중국',
    '일본',
    '러시아',
    '미국'
];

function App() {
    const [formValue, setFormValue] = useState({
        name: '',
        contry: '',
        address: ''
    });

    console.log('[App] formValue', formValue);

    return (
        <div className="App">
            <div className="form">
                <div className="form-item">
                    <h1>1. 이름이 무엇인가요?</h1>
                    <TextInput
                        value={formValue.name}
                        setValue={(value) => {
                        setFormValue((state) => ({
                            ...state,
                            name: value
                        }));
                    }}/>
                </div>
                <div className="form-item">
                    <h1>2. 사는 곳은 어딘가요?</h1>
                    <Select
                        value={formValue.contry}
                        setValue={(value) => {
                            setFormValue((state) => ({
                                ...state,
                                contry: value
                            }));
                        }}
                        options={contryOptions}
                    />

                </div>
                {formValue.contry === "한국" ? (
                <div className="form-item">
                    <h1>2-1. 한국 어디에 사시나요?</h1>
                    <TextInput
                        value={formValue.address}
                        setValue={(value) => {
                            setFormValue((state) => ({
                                ...state,
                                address: value
                            }));
                        }}
                    />
                </div>
                ) : null
                }
                <div className="button-group">
                    <button
                        onClick={() => {
                            alert('저장되었습니다.');
                            setFormValue({
                                name: "",
                                contry: "",
                                address: ""
                            });
                    }}
                    disabled={formValue.name === "" || formValue.conrty === ""}
                > 저장</button>
                </div>
            </div>
        </div>
    )
}

export default App;
