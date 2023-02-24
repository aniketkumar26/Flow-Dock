import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

const HeaderSearch = () => {
    return (
        <HeaderSearchContainer>
            <SearchIcon />
            <input placeholder='Search' />
        </HeaderSearchContainer>
    )
}

const HeaderSearchContainer = styled.div`
    flex: 0.4;
    display: flex;
    align-items: center;
    background: var(--secondary);
    border-radius: 4px;
    padding: 5px 10px;
    min-width: 30wv;

    > input {
        outline: none;
        color: white;
        background-color: transparent;
        border: none;
        width: 100%;
        height: 100%;
        font-size: 1.1rem;
        margin-left: 5px;
    
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #FFFFFF;
            opacity: 0.6; /* Firefox */
        }
    }
`

export default HeaderSearch