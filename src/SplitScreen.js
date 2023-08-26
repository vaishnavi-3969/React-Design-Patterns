import Styled from 'styled-components';

const Container = Styled.div`
    display:flex;
`;

const Pane = Styled.div`
    flex:${props => props.weight};
`;

export const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 1,
}) => {
    const [left, right] = children;
    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    );
}