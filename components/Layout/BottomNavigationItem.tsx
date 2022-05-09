import { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import styles from './BottomNavigationItem.module.scss'

type BottomNavigationItemProps = {
  title: string
  icon: IconProp
}

const BottomNavigationItem: FunctionComponent<BottomNavigationItemProps> = ({ icon, title }) => {
  return (
    <div className={styles.navigationItem}>
      <FontAwesomeIcon icon={icon} />
      <span className={styles.title}>{title}</span>
    </div>
  )
}

export default BottomNavigationItem
