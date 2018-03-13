import styled from 'styled-components';
export const Wrapper = styled.div`
    width: 95%;
    height: 60%;
    overflow: none;
    display: flex;
    padding: 20px;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;
export const ExperienceWrapper = styled.div`
    padding-left: 5px;
    color: #138d75;
    margin-bottom: 40px;

    & h1 {
        margin: 20px;
    }
`;

export const Job = styled.div`
    box-shadow: 1px 1px 4px .5px rgb(102, 102, 102);
    transition: 0.3s;
    padding: 35px;

    &:hover {
        box-shadow: 3px 3px 3px 3px rgb(102, 102, 102);
        transition: 0.3s;
        padding: 35px;
    }
`;

export const Project = styled.div`
    height: 400px;
    width: 400px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 4px .5px rgb(102, 102, 102);
    transition: 0.3s;
    padding: 50px;
    margin: 20px;
    padding-bottom: 10px;
    align-content: center;

    @media (max-width: 700px) {
        width: 300px;
    }
    
    &:hover {
        height: 400px;
        width: 400px;
        display: flex;
        flex-direction: column;
        box-shadow: 4px 4px 16px .5px rgb(102, 102, 102);
        transition: 0.3s;
        padding: 50px;
        margin: 20px;
        padding-bottom: 10px;
        align-content: center;
    }

    @media (max-width: 700px) &:hover {
        width:300px;
    }

`;