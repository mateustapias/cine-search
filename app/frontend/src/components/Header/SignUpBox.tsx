import { useAppContext } from '../../utils';
import '../../styles/components/SignUpBox.scss';

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
      <span>Registrar-se</span>
    </button>
  );
};

export default SignUpBox;
