import React, { useState } from 'react';

const suggestionsData = [
    'React', 'Hands On', 'Live Coding', 'Angular', 'Vue JS', 'JS Fundamentals', 
    'Typescript', 'Browser/DOM', 'API', 'Router', 'Forms', 'Jest', 'Vue', 
    'Templates', 'Directives', 'Routing', 'State management', 'Asynchronous programming', 
    'React Js', 'Hooks', 'JSX', 'CSS', 'flex', 'DOM'
];

const ChipAutoComplete = () => {
    const [inputValue, setInputValue] = useState('');
    const [chips, setChips] = useState([]);
    const [suggestions, setSuggestions] = useState(suggestionsData);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value) {
            const filteredSuggestions = suggestionsData.filter(suggestion =>
                suggestion.toLowerCase().includes(value.toLowerCase()) && !chips.includes(suggestion)
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions(suggestionsData.filter(suggestion => !chips.includes(suggestion)));
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue) {
            if (!chips.includes(inputValue) && suggestions.includes(inputValue)) {
                setChips([...chips, inputValue]);
                setInputValue('');
                setSuggestions(suggestionsData.filter(suggestion => !chips.includes(suggestion)));
            }
        }
    };

    const handleRemoveChip = (chip) => {
        setChips(chips.filter(c => c !== chip));
        setSuggestions(suggestionsData.filter(suggestion => !chips.includes(suggestion)));
    };

    return (
        <div className="w-full max-w-lg mx-auto mt-8 p-4">
            <div className="flex flex-wrap">
                {chips.map((chip, index) => (
                    <div key={index} className="m-1 flex items-center bg-blue-200 rounded-full px-2 py-1 text-sm">
                        {chip}
                        <button className="ml-2 text-blue-600" onClick={() => handleRemoveChip(chip)}>×</button>
                    </div>
                ))}
            </div>
            <input
                className="w-full p-2 border border-gray-300 rounded mt-2"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter a tag..."
            />
        </div>
    );
};

export default ChipAutoComplete;

