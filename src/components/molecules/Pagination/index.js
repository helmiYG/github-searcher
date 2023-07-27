import React from 'react';
import { Card, PaginationIndex, Skeleton } from 'components'
import './styles.scss'

const Pagination = ({ data, isLoading, page, handleOnClickPage, type, handleOnNextPage, handleOnPrevPage}) => {
  return (
    <div>
      <div className='m-list-card'>
      {
          isLoading && <Skeleton /> 
      }
      {!isLoading && data?.length > 0 && data.map((item, index) => (
        <Card el={item} key={index} type={type} position={type === 0 && 'center'}/>
      ))}
      </div>
       
      <PaginationIndex page={page} onClickNumber={handleOnClickPage} handleOnNextPage={handleOnNextPage} handleOnPrevPage={handleOnPrevPage}/>
    </div>

  );
};

export default Pagination;
