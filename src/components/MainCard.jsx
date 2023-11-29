import { Link } from 'react-router-dom';

const MainCard = ({ title, day }) => {
  return (
    <Link to={`/${day}`}>
      <li className='text-xl mb-4 hover:text-white'>
        <span className='font-semibold text-black mr-2'>Day {day}</span>
        <div className='bg-gray-200 mt-2'>
          <span>{title}</span>
        </div>
      </li>
    </Link>
  );
};

export default MainCard;
