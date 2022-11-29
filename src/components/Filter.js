import {Text} from 'components/Text.styled';
import {Label} from 'components/Label.styled';
import { Box } from 'components/Box.styled';
import { selectFilter } from 'redux/filter/filterSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const changeFilter = event => {
        dispatch(setFilter(event.currentTarget.value));
    };
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            w="300px"
            gap="10px"
        >
            <Label htmlFor="id-filter"
            >
                Find contacts by name
            </Label>
            <Text
                type="text"
                name="filter"
                id="id-filter"
                value={filter}
                onChange={changeFilter}
            ></Text>
        </Box>
    )
};