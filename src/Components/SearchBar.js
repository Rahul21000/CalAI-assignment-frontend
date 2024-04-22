import SearchIcon from "@mui/icons-material/Search";

const inputStyle = {
  minWidth: "20%",
  height: "5vh",
  padding: "4px",
  border: "none",
  borderRadius: "8px",
  background: "#F2F2F2",
  textAline: "center",
  boxSize: "borderBox",
};

function SearchBar() {
  const handleTextSearch = (e) => {
    e.preventDefualt();
  };
  return (
    <div style={{ display: "flex"}}>
      <div>
        <input
          style={inputStyle}
          type="search"
          placeholder="search"
          onChange={handleTextSearch}
        />
      </div>
      <div style={{marginLeft:"-30px"}}>
        <SearchIcon />
      </div>
    </div>
  );
}

export default SearchBar;
