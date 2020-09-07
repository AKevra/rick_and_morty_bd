import React from 'react';
import { connect } from 'react-redux';
import setCharactersThunk from '../../actions/setCharectersAction';

const Paginator = (props) => {
    const {prevPageUrl, nextPageUrl, getNextPage, getPrevPage, currentPage} = props;
    return (
        <div className="Paginator">
            {prevPageUrl &&  <button onClick={() => getPrevPage(prevPageUrl)} className="prevBtn">Previous</button>}
    <span>{currentPage}</span>
            {nextPageUrl && <button onClick={() => getNextPage(nextPageUrl)} className="nextBtn">Next</button>}
        </div>
    )
}
const mapStateToProps = (state) => ({
        prevPageUrl: state.paginator.prevPageUrl,
        nextPageUrl: state.paginator.nextPageUrl,
        pageCount: state.paginator.pageCount,
        currentPage: state.paginator.currentPage,
});
const mapDispatchToProps =(dispatch)=> ({
    getNextPage: (nextPageUrl) => dispatch(setCharactersThunk(nextPageUrl)),
    getPrevPage: (prevPageUrl) => dispatch(setCharactersThunk(prevPageUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);