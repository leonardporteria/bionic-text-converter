import './Input.scss';

const Input = () => {
  return (
    <div className='Input'>
      <h1>Enter your text below:</h1>
      <textarea cols='30' rows='10'></textarea>
      <button>convert</button>
    </div>
  );
};

export default Input;
