import TextInput from '../TextInput';

function ProgressIndicator({ type, answer, setAnswer }) {
    let InputComponent = null;

    if(type === 'select') {

    } else if(type === 'text') {
        InputComponent = TextInput;
    } else if(type === 'textarea') {

    }
    return (
        <>
            <InputComponent answer={answer} setAnswer={setAnswer} />
        </>
    )
}

export default ProgressIndicator;