import Button from './Button';
import Search from './Search';
import { Plus } from 'react-feather';
import './Head.scss';

function Head() {
  return (
    <header className="head">
      <Search type="text" label="Search"></Search>
      <Button primary={true}>
        <Plus></Plus>
      </Button>
    </header>
  );
}

export default Head;
