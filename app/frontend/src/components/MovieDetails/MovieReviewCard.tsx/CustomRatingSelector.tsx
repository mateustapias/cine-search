import '../../../styles/components/CustomRatingSelector.scss';

type CustomRatingSelectorProps = {
  rating: number;
  onChange: (value: number) => void;
};

const CustomRatingSelector = ({ rating, onChange }: CustomRatingSelectorProps) => {
  const handleClick = (value: number) => {
    onChange(value);
  };

  const getButtonColor = (value: number) => {
    const red = Math.round((1 - value / 10) * 255);
    const green = Math.round((value / 10) * 255);
    return `rgb(${red}, ${green}, 0)`;
  };

  return (
    <div className='c-custom-rating-selector'>
      {[...Array(11).keys()].map((value) => (
        <button
          key={value}
          className={`c-rating-circle ${value === rating ? 'selected' : ''}`}
          onClick={() => handleClick(value)}
          style={value === rating ? { backgroundColor: getButtonColor(value) } : { '--hover-color': getButtonColor(value) } as React.CSSProperties}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default CustomRatingSelector;
