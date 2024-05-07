import { useState } from 'react';
import LogInPrompt from './LogInPrompt';
import SignUpPrompt from './SignUpPrompt';
import '../../styles/components/LogInOrSignUp/GeneralPrompt.css';
import useAppContext from '../../utils/useAppContext';

type SelectedType = 'logIn' | 'signUp';

const GeneralPrompt = () => {
  const { showLogInOrSignUp, setShowLogInOrSignUp } = useAppContext();
  const [userSelection, setUserSelection] = useState<SelectedType>(showLogInOrSignUp.type);

  return (
    <div className='generalPromptPage'>
      <div
        className='background'
        onClick={() => setShowLogInOrSignUp({ ...showLogInOrSignUp, show: false })}
      >
      </div>
      <div
        className='generalPromptOuterContainer'
      >
        <div className='generalPromptInnerContainer'>
          <div className='selectionContainer'>
            <button
              className={`log-in-btn ${(userSelection == 'logIn') && ' active'}`}
              // className='log-in-btn'
              onClick={() => setUserSelection('logIn')}
            >Log in</button>
            <button
              className={`sign-up-btn ${(userSelection == 'signUp') && ' active'}`}
              // className='sign-up-btn'
              onClick={() => setUserSelection('signUp')}
            >Sign up</button>
          </div>
          {(userSelection == 'logIn') ?
            <LogInPrompt /> :
            <SignUpPrompt />
          }
        </div>
      </div>
    </div>
  );
};

export default GeneralPrompt;