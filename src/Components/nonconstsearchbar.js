function SearchBar(props) {
    const BarStyling = {width:"50rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
      <input 
       style={BarStyling}
       key="random1"
    //    value={keyword}
       placeholder={props.placeholder_string}
    //    onChange={(e) => setKeyword(e.target.value)}
      />
    );
  }
  
  export default SearchBar