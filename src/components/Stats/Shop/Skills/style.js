import styled from 'styled-components';

export const SkillsContainer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    background-color: white;
    overflow-y: scroll;

    & > *:last-child {
        margin-bottom: 70px;
    }
`;
