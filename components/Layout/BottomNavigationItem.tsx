import { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'

import styles from './BottomNavigationItem.module.scss'

type BottomNavigationItemProps = {
  title: string
  icon: IconProp
  highlight?: boolean
}

const BottomNavigationItem: FunctionComponent<BottomNavigationItemProps> = ({ icon, title, highlight }) => {
  return (
    <div className={styles.navigationItem}>
      <FontAwesomeIcon className={classNames({ [styles.highlight]: highlight })} icon={icon} />
      <span className={classNames(styles.title, { [styles.highlight]: highlight })}>{title}</span>
    </div>
  )
}

export default BottomNavigationItem
