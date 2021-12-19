import React, {useState} from 'react'
import task from './jsons/asset'
import './App.css';
import {MainContainer} from "./components/main-container";
import {Block} from "./components/block";
import {CheckBoxSelect} from "./components/checkbox-select";
import {Button} from "./components/button";

const App = () => {
    const [answerVisible, setAnswerVisible] = useState(false)
    const [taskNum, setTaskNum] = useState(0)
    const [selectedOptions, setSelectedOption] = useState({})

    const checkHandler = () => {
        setAnswerVisible(true)
    }

    const submitHandler = () => {
        setAnswerVisible(false)
        setTaskNum(prev => prev + 1)
        setSelectedOption({})
    }

    return (
        <div className="App">
          <MainContainer>
              <Block>
                  <Block>{taskNum + 1 + '. ' + task[taskNum].header}</Block>
                  <img src={task[taskNum].src}/>
                  <Block>
                      <CheckBoxSelect options={task[taskNum].questions} selectedOption={selectedOptions} setSelectedOption={setSelectedOption} answer={task[taskNum].answer} answerVisible={answerVisible}/>
                  </Block>
                  <Button handler={checkHandler} title='Проверить'/>
                  <Button handler={submitHandler} title='Следующий'/>
              </Block>
          </MainContainer>
        </div>
    );
}

export default App;
