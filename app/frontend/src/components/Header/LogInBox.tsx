import '../../styles/components/LogInBox.css';
import useAppContext from '../../utils/useAppContext';
// import defaultUserIcon from '../assets/images/defaultUserIcon.png';

const LogInBox = () => {
  const { setShowLogInOrSignUp } = useAppContext();
  function handleClick(): void {
    setShowLogInOrSignUp({
      show: true,
      type: 'logIn',
    });
  }
  return (
    <button className='btn-log-in-box' onClick={handleClick}>
      {/* <img src={defaultUserIcon} /> */}
      <span>Log in</span>
    </button>
  );
};

export default LogInBox;
