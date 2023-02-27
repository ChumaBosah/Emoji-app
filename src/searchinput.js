import React, {useState,useEffect} from 'react';
import emoji from 'emoji.json'

function Searchinput() {
    const [search,setSearch] = useState('');
    const [data,setData] = useState([]);
    useEffect(() => {
      const newData = emoji.filter(emoji => emoji.name. toLowerCase().includes(search.toLowerCase()));
      setData(newData);
    },[search])
    

  return (
    <div>
        <input type='text' name='search' value={search} className='searchbar' onChange={(e) => setSearch(e.target.value)}/>
        {data.map(emoji => <div>
          <div className="card">
        <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.char)}}>
            {emoji.char} {emoji.name}
          </div>
    </div>
        </div>)}
       
       </div>
  );
}

export default Searchinput;
