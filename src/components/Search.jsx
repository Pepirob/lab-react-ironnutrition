import { Input, Form, Button } from 'antd';
import { useState } from 'react';
function Search(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    props.filterFood(event.target.value);
  };
  return (
    <div>
      <h3>Search Food</h3>
      <Form>
        <label htmlFor="search">Search</label>
        <br />
        <Input
          type="text"
          name="search"
          value={searchQuery}
          onChange={handleSearch}
        />
      </Form>
    </div>
  );
}

export default Search;
