import { useState } from 'react';
import LogInPrompt from './LogInPrompt';
import SignUpPrompt from './SignUpPrompt';
import '../../styles/components/GeneralPrompt.css';
import useAppContext from '../../utils/useAppContext';

type SelectedType = 'logIn' | 'signUp';

const GeneralPrompt = () => {
  const { showLogInOrSignUp, setShowLogInOrSignUp } = useAppContext();
  const [userSelection, setUserSelection] = useState<SelectedType>(showLogInOrSignUp.type);

  return (
    <div className='page-general-prompt'>
      <div
        className='background'
        onClick={() => setShowLogInOrSignUp({ ...showLogInOrSignUp, show: false })}
      >
      </div>
      <div
        className='c-outter-general-prompt'
      >
        <div className='c-inner-general-prompt'>
          <div className='c-selection'>
            <button
              className={`btn-log-in${(userSelection === 'logIn') ? ' active' : ''}`}
              onClick={() => setUserSelection('logIn')}
            >Log in</button>
            <button
              className={`btn-sign-up${(userSelection === 'signUp') ? ' active' : ''}`}
              onClick={() => setUserSelection('signUp')}
            >Sign up</button>
          </div>
          {(userSelection === 'logIn')
            ? <LogInPrompt />
            : <SignUpPrompt />
          }
        </div>
      </div>
    </div>
  );
};

export default GeneralPrompt;
