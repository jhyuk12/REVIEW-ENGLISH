import MainCard from '../components/MainCard';
import englishData from '../englishData.json';

const Main = () => {
  return (
    <div
      className='min-h-screen max-w-screen-md mx-auto px-8 pt-20 font-HWR'
      style={{
        backgroundImage: "url('./images/back.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <h1 className='text-center text-2xl font-semibold'>MiGukMal Learning</h1>
      <ul className='mt-12'>
        {englishData.map((v, i) => (
          <MainCard key={i} title={v.title} day={v.day} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
