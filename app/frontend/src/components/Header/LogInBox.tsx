import '../../styles/components/LogInBox.scss';
import useAppContext from '../../utils/useAppContext';

const LogInBox = () => {
  const { setShowLogInOrSignUp } = useAppContext();
  const handleClick = (): void => {
    setShowLogInOrSignUp({
      show: true,
      type: 'logIn',
    });
  };

  return (
    <button className='btn-log-in-box' onClick={handleClick}>
      <span>Entrar</span>
    </button>
  );
};

export default LogInBox;
