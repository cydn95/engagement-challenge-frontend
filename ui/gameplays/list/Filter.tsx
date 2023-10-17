import { useState } from 'react';

import { Button } from 'components/Button';
import { TextInput } from 'components/TextInput';
import { searchTypes, gameNames, gameTypes } from 'shared/configs/game';
import stringTool from 'shared/tools/stringTool';

interface FilterProps {
  onSearchByValue: (type: string, value: string) => void;
  onSearchAll: () => void;
}

const Filter = ({ onSearchByValue, onSearchAll }: FilterProps) => {
  const [searchType, setSearchType] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleSearchAll = () => {
    setSearchType('');
    setSearchValue('');

    onSearchAll();
  };

  const handleSearch = () => {
    if (searchType === '' || searchValue === '') return;
    onSearchByValue(searchType, searchValue);
  };

  return (
    <div className="flex items-center gap-4 mt-4 mb-8">
      <span className="text-[#babbbb]">FILTER BY</span>
      <div className="flex items-center gap-2">
        <span className="w-12 text-right">Search</span>
        <select
          value={searchType}
          onChange={(e) => {
            setSearchValue('');
            setSearchType(e.target.value);
          }}
          className="rounded-[5px] outline-none h-10 w-[200px] text-black"
        >
          <option key="search-type-0" value="" disabled>
            -Select-
          </option>
          {searchTypes.map((item, index) => (
            <option key={`search-type-${index}`} value={item}>
              {stringTool.captalize(item)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-12 text-right">Value</span>
        {searchType === 'name' && (
          <select
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="rounded-[5px] outline-none h-10 w-[200px] text-black"
          >
            <option key="game-name-0" value="" disabled>
              {' '}
              - Select -
            </option>
            {gameNames.map((item, index) => (
              <option key={`game-name-${index}`} value={item}>
                {stringTool.captalize(item)}
              </option>
            ))}
          </select>
        )}

        {searchType === 'type' && (
          <select
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="rounded-[5px] outline-none h-10 w-[200px] text-black"
          >
            <option key="game-type-0" value="" disabled>
              - Select -
            </option>
            {gameTypes.map((item, index) => (
              <option key={`game-type-${index}`} value={item}>
                {stringTool.captalize(item)}
              </option>
            ))}
          </select>
        )}

        {searchType === 'date' && (
          <TextInput
            type="date"
            value={searchValue}
            onChange={(value) => setSearchValue(value)}
            className="w-[200px]"
          />
        )}
      </div>

      <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>
      <Button variant="secondary" onClick={handleSearchAll}>
        Reset
      </Button>
    </div>
  );
};

export default Filter;
