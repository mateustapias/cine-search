import { useState, FocusEvent } from 'react';
import LogInPrompt from './LogInPrompt';
import SignUpPrompt from './SignUpPrompt';
import '../../styles/components/LogInOrSignUp/GeneralPrompt.css';
import useAppContext from '../../utils/useAppContext';

type SelectedType = 'logIn' | 'signUp';

const GeneralPrompt = () => {
  const { showLogInOrSignUp, setShowLogInOrSignUp } = useAppContext();
  const [userSelection, setUserSelection] = useState<SelectedType>(showLogInOrSignUp.type);
  function handleBlur(event: FocusEvent<HTMLDivElement, Element>): void {
    if (!event.relatedTarget) {
      setShowLogInOrSignUp({ show: false, type: 'logIn' });
    }
  }

  return (
    <div className='generalPrompt' onBlur={handleBlur}>
      <div className={`${userSelection}Container`}>
        {(userSelection == 'logIn') ?
          <LogInPrompt /> :
          <SignUpPrompt />
        }
      </div>
    </div>
  );
};

export default GeneralPrompt;