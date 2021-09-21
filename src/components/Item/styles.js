import styled from 'styled-components'

export const ItemList = styled.li`
    list-style: none;
    margin-left: .75rem;
    
    &:last-child {
        padding-bottom: 0;
    }
`

export const Label = styled.label`
    display: flex;
    align-items: center;
    padding-left: 1rem;
    margin-right: 1rem;
    font-size: 1.2rem;
    min-height: 3rem;
    cursor: pointer;
    border-bottom: 1px solid #aaa;
    background: #FFFFFF;

    &:hover {
        background-color: #EDEDED;
    }

    &.active {
        background-color: #EDEDED;

        button {
            transform: rotate(-180deg);
            color: #0084e4;
        }
    }

    /* &:last-child {
        border-bottom: none;
    } */

    input {
        width: 18px; 
        height: 18px; 
        margin-right: 1rem;
    }

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        cursor: pointer;
        min-height: 3rem;
        padding: 0 1rem;
        font-weight: 600;
        border: unset;
        color: #888;
        background-color: transparent;

        transition: transform 0.5s;

        &:hover {
            color: #0084e4;
        }

    }
`