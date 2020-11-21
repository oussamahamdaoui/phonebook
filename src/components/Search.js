import { Search as Icon } from 'react-feather';
import Input from './Input';
import './Search.scss';

function Search({
  value,
  search = () => { },
}) {
  return <div className="search">
    <Icon></Icon>
    <Input label="Search" value={value} enter={search}></Input>
  </div>
}

export default Search;