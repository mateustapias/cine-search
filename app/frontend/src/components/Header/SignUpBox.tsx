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
    <button className='btn-sign-up-box' onClick={handleClick}>
      <span>Sign up</span>
    </button>
  );
};

export default SignUpBox;
