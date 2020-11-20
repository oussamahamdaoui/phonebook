import Button from '../../components/Button';
import Search from '../../components/Search';
import { Plus } from 'react-feather';
import './Head.scss';
import { Link } from 'react-router-dom';

function Head() {
  return (
    <header className="head">
      <Search type="text" label="Search"></Search>
      <Link to="/new-contact">
        <Button type='primary'>
          <Plus></Plus>
        </Button>
      </Link>
    </header>
  );
}

export default Head;
