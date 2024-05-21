import '../../styles/components/SignUpBox.css';
import useAppContext from '../../utils/useAppContext';

const SignUpBox = () => {
  const { setShowLogInOrSignUp } = useAppContext();
  const handleClick = () => {
    setShowLogInOrSignUp({
      show: true,
      type: 'signUp',
    });
  };
  return (
    <div className='c-sign-up-box'>
      <button className='btn-sign-up-box' onClick={handleClick}>
        <span>Sign up</span>
      </button>
    </div>
  );
};

export default SignUpBox;
