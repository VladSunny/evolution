import { LifeStatsContainer } from './style';
import { IconWithCount } from '../IconWithCount';

export function LifeStats() {
    return (
        <LifeStatsContainer>
            <IconWithCount img="HP.PNG" count={100} />
            <IconWithCount img="HUNGER.PNG" count={100} />
            <IconWithCount img="THIRST.PNG" count={100} />
        </LifeStatsContainer>
    );
}
