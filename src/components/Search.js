import { Search as Icon } from 'react-feather';
import Input from './Input';
import './Search.scss';

function Search({
  search = () => { },
}) {
  return <div className="search">
    <Icon></Icon>
    <Input label="Search"></Input>
  </div>
}

export default Search;