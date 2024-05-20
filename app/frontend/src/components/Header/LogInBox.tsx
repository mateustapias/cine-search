import '../../styles/components/LogInBox.css';
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
      <span>Log in</span>
    </button>
  );
};

export default LogInBox;
