import {useState} from 'react';

export default function SearchBar({onSearch}: {onSearch: (city:string) => void}) {
    const [city, setCity] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(city);
    };

    return(
        <form>
            <input
             type="text"
             value={city}
             onChange={(e) => setCity(e.target.value)}
             className="input input-bordered w-full"
             placeholder="Enter city"
            />
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
    );
}