import React from 'react';
import Search from '../genric/Search';
import { v4 as uuid } from 'uuid';
import Tooltip from '@material-ui/core/Tooltip';

const InfoList = ({
    options,
    searchLabel = "filter option",
    optionLabelProp = "label",
    optionComparativeValue = "id",
    optionsDisplayProp = "display",
    setOption
}) => {

   // const [areOptionsLoading, setAreOptionsLoading] = useState(false);
    const getOption = (option) => {
        setOption(option);
    }
    return (
        <div className="info-list">
            <Search
                getOption={getOption}
                options={options}
                componentId={uuid()}
                label={searchLabel}
                getOptionLabel={(option) => (option[optionLabelProp] || "")}
                getOptionSelected={(pastVal, newVal) => (pastVal[optionComparativeValue] === newVal[optionComparativeValue])}
                loading={false}
                renderOption={(option) => (
                    <React.Fragment>
                        <span>{option[optionLabelProp]}</span>
                    </React.Fragment>
                )} />
            <div className="list-scroll-continer info-list-container">
                {options.map((option) => {
                    return (
                        <Tooltip key={option.id} title={ option[optionsDisplayProp] } placement="left">
                            <span className="list-scroll-continer_item">{option[optionLabelProp]}</span>
                        </Tooltip>
                        )
                })}
            </div>



        </div>
    )


}

export default React.memo(InfoList);

