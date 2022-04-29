import { Icon, IconWithCountContainer } from './style';

export function IconWithCount({ img, count }) {
    return (
        <IconWithCountContainer>
            <Icon src={img} />
            {count}
        </IconWithCountContainer>
    );
}
