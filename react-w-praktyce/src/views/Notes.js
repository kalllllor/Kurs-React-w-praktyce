import React,{ Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Notes extends Component {
  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  render(){
    const {notes} = this.props;

    return(
      <GridTemplate pageType="notes" amount={notes.length}>
      {notes.map(({ _id :id, title, content}) => (
        <Card title={title} content={content} key={id} id={id} />
      ))}
    </GridTemplate>
    )
  }
}


Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = ({ notes }) => {
  return { notes };
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchItems('notes')),
});

export default connect(mapStateToProps,mapDispatchToProps)(Notes);
