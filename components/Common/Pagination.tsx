import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent } from 'react'
import { Pagination as BootStrapPagination } from 'react-bootstrap'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

import styles from './Pagination.module.scss'

type PaginationProps = {
  current: number
  pageCount: number
  maxSize?: number
  onChange?: (page: number) => void
}

const Pagination: FunctionComponent<PaginationProps> = ({ current, pageCount, maxSize, onChange }) => {
  const maxinumPage = maxSize || 5

  const handleChangePage = (page: number) => {
    onChange?.(page)
  }

  const applyRotation = () => {
    const maxPage = maxinumPage <= pageCount ? maxinumPage : pageCount
    let start = 1
    let end = pageCount
    let leftOffset = Math.floor(maxPage / 2)
    let rightOffset = maxPage % 2 === 0 ? leftOffset - 1 : leftOffset

    if (current <= leftOffset) {
      // very beginning, no rotation -> [0..maxSize]
      end = maxPage
    } else if (pageCount - current < leftOffset) {
      // very end, no rotation -> [len-maxSize..len]
      start = pageCount - maxPage || 1
    } else {
      // rotate
      start = current - leftOffset - 1 || 1
      end = current + rightOffset
    }

    return { start, end }
  }

  const { start, end } = applyRotation()
  const paginationItem = []
  for (let index = start; index <= end; index++) {
    paginationItem.push(
      <BootStrapPagination.Item
        className={classNames(styles.pageItem, { [styles.active]: current === index })}
        key={index}
        onClick={() => handleChangePage(index)}
      >
        {index}
      </BootStrapPagination.Item>
    )
  }

  return (
    <BootStrapPagination>
      <BootStrapPagination.Item
        className={classNames(styles.pageItem, { [styles.disabled]: current === 1 })}
        disabled={current === 1}
        onClick={() => handleChangePage(current - 1)}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </BootStrapPagination.Item>
      {paginationItem}
      <BootStrapPagination.Item
        className={classNames(styles.pageItem, { [styles.disabled]: current === pageCount })}
        disabled={current === pageCount}
        onClick={() => handleChangePage(current + 1)}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </BootStrapPagination.Item>
    </BootStrapPagination>
  )
}

export default Pagination
