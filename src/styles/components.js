import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    max-width: 1200px;
    width: 90%;
    max-height: 90%;
    height: 800px;
    border-radius: 0.75rem 0.5rem;
    padding: 1.75rem 1rem;
`

export const List = styled.ul`
    display: none;

    &.show {
        display: block;
    }
`