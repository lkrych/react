import NumberInput from './form-input/number';
import TextInput from './form-input/text';
import RadioButtons from './form-input/radio';

const generateFormElements = (stateElements) =>{
   stateElements.map((element, idx) => {
    if(element.questionType === 'radio'){
      return(
        <div key = {idx}>
          <p>{element.questionText}</p>
          <RadioButtons
            subItems = {element.subItems} />
        </div>
      );
    } else if (element.questionType === 'number'){
      return(
        <div key = {idx}>
          <p>{element.questionText}</p>
          <NumberInput
            subItems = {element.subItems} />
        </div>
      );
    } else {
        return(
          <div key = {idx}>
            <p>{element.questionText}</p>
            <TextInput
              subItems = {element.subItems} />
          </div>
        );
    }
  });
};
