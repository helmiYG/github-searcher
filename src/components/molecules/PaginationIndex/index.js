import React from 'react'
import './styles.scss'

import {showNumbersWithDots} from 'helpers';
import { Text } from 'components/atom';

const PaginationIndex = ({page, onClickNumber, handleOnNextPage, handleOnPrevPage}) => {
  const visibleNumbers = showNumbersWithDots(100, page);
  return (
    <div className='m-pagination-index'>
      <span style={{ cursor: 'pointer' }} onClick={handleOnPrevPage}>
        <Text type={'medium'}  disable={Number(page) === 1 && 'disable'} > &nbsp;Prev&nbsp;</Text>
      </span>
      {visibleNumbers.split(', ').map((number, index) => {
        if (number === '...') {
          return <Text type={'medium'} key={index}>....</Text>
        } else if (number === page?.toString()) {
          return (
            <Text type={'highlighted'} key={index}>
              &nbsp;{number}&nbsp;
            </Text>
          );
        } else {
          return (
            <span
              key={index}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                console.log(`Clicked on number ${number}`);
                onClickNumber(number)
              }}
            >
              <Text type={'medium'}> &nbsp;{number}&nbsp;</Text>
              &nbsp;&nbsp;
            </span>
          );
        }
      })}
      <span style={{ cursor: 'pointer' }} onClick={handleOnNextPage}>
        <Text type={'medium'} disable={Number(page) === 100 && 'disable'} > &nbsp;Next&nbsp;</Text>
      </span>
    </div>
  )
}

export default PaginationIndex