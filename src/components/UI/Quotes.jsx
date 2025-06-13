const quoteStyle = {
  fontWeight: 'bold',
  fontFamily: 'apple-system',
  color: 'black',
};

function Quotes({quote, author}) {
  return (
    <div>
      <p style={quoteStyle}>{quote}</p>
      <p style={quoteStyle}>{author}</p>
    </div>
  );
}

export default Quotes;
