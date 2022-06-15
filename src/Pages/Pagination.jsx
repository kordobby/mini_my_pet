import React from 'react';
import styled from 'styled-components';

const Pagination = ( { pages, pageClick, currentPage, changePage } ) => {

  return (
    <div>
      {/* <button onClick = {chagePage} id = "prev">
        
      </button> */}
    </div>
  );
}

export default Pagination;


/*
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './mylist.module.css'

const Pagination = ({limit, currentPage, onPageChange}) => {
    
    const [pageCount, setPageCount] = useState(0);
    const [pages, setPages] = useState([]);
    
    useEffect(() => {
        axios.get('/api/team/pagination')
        .then( 
            res => 
            { 
                const length = res.data.length;
                const tmpCnt = Math.ceil(length / limit); 
                setPageCount(tmpCnt);
                const tmpPages = Array.from({length: tmpCnt}, (v, i) => i + 1);
                setPages(tmpPages);
            }
        )
        .catch( err =>  console.log(err));
    }, [])

    if(pageCount == 1) return null;

    return (
        <nav>
            <ul >
                { pages.map(page => {
                    if(pages.length > 0){
                    return (
                        <li 
                            className={currentPage == page ? `${styles.active} ${styles.pageLi}` : styles.pageLi}
                            key={page} 
                            onClick={() => {onPageChange(page)}}>
                            {page}
                        </li>
                    )
                    }
                })}
            </ul>
        </nav>
    )
}

export default Pagination

*/