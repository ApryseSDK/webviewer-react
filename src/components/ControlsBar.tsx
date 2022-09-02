import React, { useState, useRef, useEffect } from 'react';
import styles from '../css/styles.module.css';
import useInstance from '../context';
import PropTypes from 'prop-types';
import IconChevron from './Icon/IconChevron';

type TSearchResult = {
  resultCode: number
}

const ControlsBar = ({ className = '' }) => {

  const { instance } = useInstance();
  const { documentViewer } = instance.Core;
  const pageCount = documentViewer.getPageCount();

  const [activeIndex, setActiveIndex] = useState(-1);
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);
  const pageInputRef = useRef(null);

  useEffect(() => {
    function update() {
      pageInputRef.current.value = documentViewer.getCurrentPage();
    }
    documentViewer.addEventListener('pageNumberUpdated',update);
    return () => documentViewer.removeEventListener('pageNumberUpdated', update);
  },[]);


  function searchText() {
    const { Annotations, Search } = instance.Core;
    const searchString = searchInputRef.current.value;
    documentViewer.clearSearchResults();
    setSearchResults([]);
    setActiveIndex(-1);
    if (!searchString) return;
    const newResults: Array<TSearchResult> = [];
    const mode = Search.Mode.PAGE_STOP | Search.Mode.HIGHLIGHT;
    documentViewer.setSearchHighlightColors({
      searchResult: new Annotations.Color(0, 0, 255, 0.4),
      activeSearchResult: new Annotations.Color(255, 255, 0, 0.6),
    });
    const searchOptions = {
      fullSearch: true,
      onResult: (result: TSearchResult) => {
        if (result.resultCode === Search.ResultCode.FOUND) {
          newResults.push(result);
          documentViewer.displayAdditionalSearchResult(result);
        }
      },
    };
    documentViewer.textSearchInit(searchString, mode, searchOptions);
    setSearchResults(newResults);
  }

  function searchTextOnEnter(e: React.KeyboardEvent) {
    if (e.key === 'Enter') searchText();
  }

  function clearSearch() {
    searchInputRef.current.value = '';
    searchText();
  }

  function changeActiveResult (e: React.MouseEvent) {
    if (searchResults.length > 0 && e.target instanceof HTMLButtonElement) {
      const index = e.target.dataset.action === 'nextResult' 
        ? (activeIndex === searchResults.length - 1 ? 0 : activeIndex + 1)
        : (activeIndex <= 0 ? searchResults.length - 1 : activeIndex - 1);
      documentViewer.setActiveSearchResult(searchResults[index]);
      setActiveIndex(index);
    }
  }

  function zoom(e: React.MouseEvent) {
    if (!(e.target instanceof HTMLButtonElement)) return;
    instance.UI.setZoomLevel(instance.UI.getZoomLevel() + (e.target.dataset.action === 'zoomIn' ? 0.2 : -0.2));
  }
  
  function changePage(e: React.KeyboardEvent | React.MouseEvent) {
    if (!(e.target instanceof HTMLInputElement || e.target instanceof HTMLButtonElement)) return;
    const currentpage = documentViewer.getCurrentPage();
    switch (e.target.dataset.action) {
      case ('prevPage'):
        if (currentpage > 1) documentViewer.setCurrentPage(currentpage - 1);
        break;
      case ('nextPage'):
        if (currentpage < pageCount) documentViewer.setCurrentPage(currentpage + 1);
        break;
      case ('changePageNum'):
        if (e.target.value && e['key'] === 'Enter') 
          documentViewer.setCurrentPage(parseInt(e.target.value));
        break;
      default: break;
    }
  }

  function rangeCorrection(e: React.ChangeEvent) {
    if (!(e.target instanceof HTMLInputElement || e.target instanceof HTMLButtonElement)) return;
    const inputValue = parseInt(e.target.value);
    if (inputValue < 1 ) e.target.value = '1';
    else if (inputValue > pageCount) e.target.value = pageCount.toString();
  }
  
  return (
    <>
      <div className={className || styles.controlsBar}>
        <button type="button" onClick={changePage} data-action="prevPage">
          <IconChevron className={styles.iconChevronLeft}/>
        </button>
        <span>{'Page '}
          <input type="number" 
            onKeyUp={changePage} 
            onChange={rangeCorrection} 
            defaultValue={1} min={1} 
            max={pageCount} 
            ref={pageInputRef} 
            data-action="changePageNum"
          /> 
          {` / ${pageCount}`}
        </span>
        <button type="button" onClick={changePage} data-action="nextPage">
          <IconChevron className={styles.iconChevron}/>
        </button>
        <button type="button" onClick={zoom} data-action="zoomIn">{'Zoom In'}</button>
        <button type="button" onClick={zoom} data-action="zoomOut">-{'Zoom Out'}</button>
        <button type="button" onClick={searchText}>{'Search'}</button>
        <button type="button" onClick={clearSearch}>{'Clear'}</button>
        <button type="button" onClick={changeActiveResult} data-action="prevResult">
          <IconChevron className={styles.iconChevronLeft}/>
        </button>
        <input type="search" onKeyUp={searchTextOnEnter} ref={searchInputRef}/>
        <button type="button" onClick={changeActiveResult} data-action="nextResult">
          <IconChevron className={styles.iconChevron}/>
        </button>
      </div>
    </>
  );
};

ControlsBar.propTypes = {
  className: PropTypes.string
};

export default ControlsBar;