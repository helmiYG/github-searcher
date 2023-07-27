import React from 'react'
import './styles.scss'
import Text from '../Text'
import classname from 'classnames';

import { Avatar } from 'components';

const Card = ({el, type, position}) => {
  const classNames = classname('a-card', position);
  return (
    <div className={classNames} >
      {
        type === 0 ? (
          <>
            <Avatar url={el.avatar_url} />
            <Text>{el.login}</Text>
          </>
        ) : (
          <>
            <Text type={'bold'}>{el.name}</Text>
            <Text>Owner: {el.owner?.login}</Text>
            <Text>Language: {el.language}</Text>
            <Text>Watcher: {el.watchers}</Text>
            <Text>Forks: {el.forks}</Text>
            <Text>Open Issues: {el.open_issues}</Text>
          </>
        )
      }
     
    </div>
  )
}

export default Card