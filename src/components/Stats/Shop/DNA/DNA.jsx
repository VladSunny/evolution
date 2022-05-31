import { DNAContainer } from './style';
import { getDNA } from '../../../../store';
import { connect } from 'react-redux';

export function DNABase({ dna }) {
    return (
        <DNAContainer>
            {dna} <img src={'DNA.PNG'} height="50px" width={'50px'} />
        </DNAContainer>
    );
}

function mapStateToProps(state) {
    return {
        dna: getDNA(state),
    };
}

export const DNA = connect(mapStateToProps)(DNABase);
