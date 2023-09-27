import styled from '@emotion/styled';

export const ListStyle = styled.ul`
    display: flex;
    gap: 20px;
    flex-direction: column-reverse
`;

export const ItemStyle = styled.li`
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 0 10px;
    height: 45px;
    justify-content: space-around;
    background-color: rgba(223, 227, 230, 0.3);
    `  
;

export const DateCreated = styled.p`
    font-size: clamp(5px, 1vw, 10px);
    font-weight: 600;
    margin: 0 7px;
    padding: 3px;
    
    &:hover{
        border-radius: 10px;
        background-color: white;
        scale: 1.4;
    }
`;

export const EmptyStyle = styled.p`
    margin: 0 auto;
    font-size: clamp(13px, 5vw, 45px);
`;

export const ContactText = styled.p`
    word-wrap: wrap;
    font-size: clamp(10px, 2vw, 20px);
    `;