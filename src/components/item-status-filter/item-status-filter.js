import React from 'react';

const filterButtons = [
    { name: 'all', label: 'Все' },
    { name: 'active', label: 'Активный' },
    { name: 'done', label: 'Выполнено' }
];

const ItemStatusFilter = ({ filter, onFilterChange = () => {} }) => {

    const buttons = filterButtons.map(({ name, label }) => {
        const isActive = name === filter;
        const classNames = 'search__button ' + (isActive ? 'search__button--active' : 'btn-outline-secondary');

        return ( <
            button key = { name }
            type = "button"
            onClick = {
                () => onFilterChange(name)
            }
            className = { classNames } > { label } < /button>
        );
    });

    return ( <
        div className = "search__list-buttons" > { buttons } <
        /div>
    );
};

export default ItemStatusFilter;