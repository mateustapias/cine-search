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
    // <div className='c-log-in-box'>
      <button className='btn-log-in-box' onClick={handleClick}>
        <span>Log in</span>
      </button>
    // </div>
  );
};

export default LogInBox;
