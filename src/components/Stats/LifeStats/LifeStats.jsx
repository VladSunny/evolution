import { LifeStatsContainer } from './style';
import { IconWithCount } from '../IconWithCount';
import { connect } from 'react-redux';
import { getFood, getHp, getWater } from '../../../store';
import { Tooltip } from '@mui/material';

function LifeStatsBase({ hp, food, water }) {
    return (
        <LifeStatsContainer>
            <Tooltip title="Ur health, restore by time or food">
                <div>
                    <IconWithCount img="HP.PNG" count={hp} />
                </div>
            </Tooltip>
            <Tooltip title="Ur food, u need eat another animals">
                <div>
                    <IconWithCount img="HUNGER.PNG" count={food} />
                </div>
            </Tooltip>
            <Tooltip title="Ur water, u need drink blood from another animals">
                <div>
                    <IconWithCount img="THIRST.PNG" count={water} />
                </div>
            </Tooltip>
        </LifeStatsContainer>
    );
}

function mapStateToProps(state) {
    return {
        hp: getHp(state),
        food: getFood(state),
        water: getWater(state),
    };
}

export const LifeStats = connect(mapStateToProps)(LifeStatsBase);
