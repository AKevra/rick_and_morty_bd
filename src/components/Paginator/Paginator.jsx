import React from "react";
import { connect } from "react-redux";
import { setCharactersThunk } from '../../actions/setCharectersAction';
import { setEpisodesThunk } from '../../actions/setEpisodesAction';

const Paginator = (props) => {
  const {
    nextPageUrl,
    prevPageUrl,
    currentPage,
    getNextPage,
    getPrevPage,
    paginatorPage,
  } = props;
  console.log(paginatorPage);
 
  return (
    
    <div className="Paginator">
      
      {prevPageUrl && (
        <button onClick={() => getPrevPage(prevPageUrl, paginatorPage)}>prevBtn</button>
      )}
      <span>{currentPage}</span>
      {nextPageUrl && (
        <button onClick={() => getNextPage(nextPageUrl, paginatorPage)}>nextBtn</button>
      )}
    </div>
  );
};


const mapStateToProps = (state) => ({
  nextPageUrl: state.paginator.nextPageUrl,
  prevPageUrl: state.paginator.prevPageUrl,
  pageCount: state.paginator.pageCount,
  currentPage: state.paginator.currentPage,
  paginatorPage: state.paginator.paginatorPage,
});


const mapDispatchToProps = (dispatch, paginatorPage) => ({
    getNextPage: (nextPageUrl) => {
      paginatorPage === "setCharactersThunk"  ?  dispatch(setCharactersThunk(nextPageUrl, paginatorPage)) : dispatch(setEpisodesThunk(nextPageUrl, paginatorPage))  ;
  },
  getPrevPage: (prevPageUrl) => {
      paginatorPage  === "setCharactersThunk"  ?  dispatch(setCharactersThunk(prevPageUrl)) :  dispatch(setEpisodesThunk(prevPageUrl))
     
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
