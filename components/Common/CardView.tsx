import { FunctionComponent } from 'react'
import classNames from 'classnames'

import styles from './CardView.module.scss'

type CardViewProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
  hoverable?: boolean
}

const CardView: FunctionComponent<CardViewProps> = ({ hoverable, children, className, ...props }) => {
  return (
    <div className={classNames(className, styles.cardView, { [styles.cardViewHover]: hoverable })} {...props}>
      {children}
    </div>
  )
}

export default CardView
