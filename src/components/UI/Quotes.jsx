const quoteStyle = {
  fontWeight: '500',
  fontFamily: 'apple-system',
  color: 'black',
  fontSize: '0.8rem',
};

function Quotes({ quote, author }) {
  return (
    <div>
      <p style={quoteStyle}>{quote}</p>
      <p style={quoteStyle}>{author}</p>
    </div>
  );
}

export default Quotes;
