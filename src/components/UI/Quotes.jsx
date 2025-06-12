const quoteStyle = {
  fontWeight: 'bold',
  fontFamily: 'apple-system',
  color: 'black',
};

function Quotes(props) {
  return (
    <div>
      <p style={quoteStyle}>{props.quote}</p>
      <p style={quoteStyle}>{props.author}</p>
    </div>
  );
}

export default Quotes;
