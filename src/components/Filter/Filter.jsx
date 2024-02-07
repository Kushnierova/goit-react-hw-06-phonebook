import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onChange = e => {
    const filterName = e.currentTarget.value;
    dispatch(setFilter(filterName));
  };

  return (
    <label htmlFor="filter" className={css.label}>
      <input
        type="text"
        placeholder="Find contact by name:"
        value={filter.value}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        className={css.filter}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
