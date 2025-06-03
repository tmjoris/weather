import {useState} from 'react';

export default function SearchBar({onSearch}: {onSearch: (city:string) => void}) {
    const [city, setCity] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(city);
    };
}