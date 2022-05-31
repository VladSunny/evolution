import { StatsContainer } from './style';
import { LifeStats } from './LifeStats';
import { SkillsStats } from './SkillsStats';
import { Shop } from './Shop';

export function Stats() {
    return (
        <StatsContainer>
            <LifeStats />
            <SkillsStats />
            <Shop />
        </StatsContainer>
    );
}
