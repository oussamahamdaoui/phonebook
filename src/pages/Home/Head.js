import Button from '../../components/Button';
import Search from '../../components/Search';
import { Plus } from 'react-feather';
import './Head.scss';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Head({
  search,
}) {
  const history = useHistory();
  const [currentSearch, setSearch] = useState(search);

  const handleSearch = (searchValue) => {
    console.log(searchValue);
    history.push(encodeURI(`/?q=${encodeURIComponent(searchValue)}`));
  };

  useEffect(() => {
    setSearch(search);
  }, [search]);

  return (
    <header className="head">
      <Search type="text" label="Search" value={currentSearch} search={handleSearch}></Search>
      <Link to="/new-contact">
        <Button type='primary'>
          <Plus></Plus>
        </Button>
      </Link>
    </header>
  );
}

export default Head;
