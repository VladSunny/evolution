import { SkillsStatsContainer } from './style';
import { IconWithCount } from '../IconWithCount';
import { connect } from 'react-redux';
import { getDexterity, getStrength, getIntelligence } from '../../../store';
import { Tooltip } from '@mui/material';

function SkillsStatsBase({ dexterity, strength, intelligence }) {
    return (
        <SkillsStatsContainer>
            <Tooltip title="Ur dexterity, for example: u use it for run">
                <div>
                    <IconWithCount img="dexterity.PNG" count={dexterity} />
                </div>
            </Tooltip>
            <Tooltip title="Ur strength, damage">
                <div>
                    <IconWithCount img="strength.PNG" count={strength} />
                </div>
            </Tooltip>
            <Tooltip title="Ur intelligence, for example: for making friends">
                <div>
                    <IconWithCount
                        img="intelligence.PNG"
                        count={intelligence}
                    />
                </div>
            </Tooltip>
        </SkillsStatsContainer>
    );
}

function mapStateToProps(state) {
    return {
        dexterity: getDexterity(state),
        strength: getStrength(state),
        intelligence: getIntelligence(state),
    };
}

export const SkillsStats = connect(mapStateToProps)(SkillsStatsBase);
