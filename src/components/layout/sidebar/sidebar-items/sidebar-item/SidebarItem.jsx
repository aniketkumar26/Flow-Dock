import styled from "styled-components"

const SidebarItem = ({ title, Icon, onClickHandler, id }) => {
    return (
        <SidebarItemContainer onClick={onClickHandler && ((e) => onClickHandler(e, id))}>
            <h3>
                {Icon ? <Icon fontSize="small" /> : <span># </span>}
                {title}
            </h3>
        </SidebarItemContainer>
    )
}

const SidebarItemContainer = styled.div`
    padding: 13px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 12px;
    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        display: flex;
        align-items: center;
        font-weight: 500;

        svg, span {
            margin-right: 10px;
        }

        span {
            font-size: initial;
            padding: 0 4px;
        }
    }

`

export default SidebarItem