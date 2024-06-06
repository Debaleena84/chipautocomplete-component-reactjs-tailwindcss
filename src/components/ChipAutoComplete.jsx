import React, { useState, useEffect } from 'react';

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
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const maxChips = 10;

    useEffect(() => {
        setSuggestions(suggestionsData.filter(suggestion => !chips.includes(suggestion)));
    }, [chips]);

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
        if (e.key === 'Enter' && inputValue && highlightedIndex >= 0) {
            const selectedSuggestion = suggestions[highlightedIndex];
            if (!chips.includes(selectedSuggestion)) {
                addChip(selectedSuggestion);
            }
        } else if (e.key === 'ArrowDown') {
            setHighlightedIndex((highlightedIndex + 1) % suggestions.length);
        } else if (e.key === 'ArrowUp') {
            setHighlightedIndex((highlightedIndex - 1 + suggestions.length) % suggestions.length);
        }
    };

    const addChip = (chip) => {
        if (chips.length < maxChips) {
            setChips([...chips, chip]);
            setInputValue('');
            setSuggestions(suggestionsData.filter(suggestion => suggestion !== chip && !chips.includes(suggestion)));
        }
    };

    const handleRemoveChip = (chip) => {
        setChips(chips.filter(c => c !== chip));
        setSuggestions(suggestionsData.filter(suggestion => !chips.includes(suggestion)));
    };

    const handleSuggestionClick = (suggestion) => {
        addChip(suggestion);
    };

    const clearChips = () => {
        setChips([]);
        setSuggestions(suggestionsData);
    };

    const getHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span>{parts.map((part, index) =>
            part.toLowerCase() === highlight.toLowerCase() ? <b key={index} className="text-blue-600">{part}</b> : part
        )}</span>;
    };

    return (
        <div className="w-full max-w-lg mx-auto mt-8 p-4">
            <div className="flex flex-wrap mb-2">
                {chips.map((chip, index) => (
                    <div key={index} className="m-1 flex items-center bg-blue-200 rounded-full px-2 py-1 text-sm transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
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
            {chips.length > 0 && (
                <button className="mt-2 mb-4 p-2 bg-red-500 text-white rounded" onClick={clearChips}>Clear All</button>
            )}
            {inputValue && suggestions.length > 0 && (
                <div className="border border-gray-300 rounded mt-2">
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            className={`p-2 cursor-pointer hover:bg-gray-200 ${index === highlightedIndex ? 'bg-gray-200' : ''}`}
                            onMouseDown={() => handleSuggestionClick(suggestion)}
                        >
                            {getHighlightedText(suggestion, inputValue)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChipAutoComplete;
