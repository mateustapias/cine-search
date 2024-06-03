import '../../styles/components/SignUpBox.scss';
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
      <span>Registrar</span>
      {/* <span>Sign up</span> */}
    </button>
  );
};

export default SignUpBox;
