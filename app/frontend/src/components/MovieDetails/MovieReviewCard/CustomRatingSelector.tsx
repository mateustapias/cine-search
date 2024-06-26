import getReviewButtonColor from '../../../utils/getReviewButtonColor';
import '../../../styles/components/MovieReviewCard/CustomRatingSelector.scss';

type CustomRatingSelectorProps = {
  rating: number;
  onChange: (value: number) => void;
};

const CustomRatingSelector = ({ rating, onChange }: CustomRatingSelectorProps) => {
  const handleClick = (value: number) => {
    onChange(value);
  };

  return (
    <div className='c-custom-rating-selector'>
      {[...Array(11).keys()].map((value) => (
        <button
          key={value}
          className={`c-rating-circle ${value === rating ? 'selected' : ''}`}
          onClick={() => handleClick(value)}
          style={{ '--color': getReviewButtonColor(value) } as React.CSSProperties}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default CustomRatingSelector;
