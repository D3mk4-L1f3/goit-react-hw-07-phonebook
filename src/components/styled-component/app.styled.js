import styled from '@emotion/styled';


export const MainAppStyle = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '50px',
    gap: '40px',
    flexDirection: 'column',
    alignContent: 'center',
}
);

export const MainContainerStyle = styled.div({
    display: 'flex',
    gap: '15px',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '10px',
    background: 'rgba(36, 36, 36, 0.1)',  
});

export const MainTitleStyle = styled.h1({
    textAlign: 'center',
    fontSize: 'clamp(20px, 5vw, 45px)',
});

export const SecondTitleStyle = styled.h2({
    textAlign: 'center',
    fontSize: 'clamp(20px, 5vw, 45px)',
});

export const ThirdTitleStyle = styled.h3`
font-size: clamp(10px, 5vw, 30px)
`;



