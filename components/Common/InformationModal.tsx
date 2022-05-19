import { FunctionComponent } from 'react'
import { Button, Modal, ModalProps } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faExclamationCircle, faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

import styles from './InformationModal.module.scss'

type InformationModalProps = ModalProps & {
  title: string
  message: string
  type: 'success' | 'warning' | 'error'
}

const InformationModal: FunctionComponent<InformationModalProps> = ({ title, message, type, ...props }) => {
  let icon: IconDefinition
  switch (type) {
    case 'success':
      icon = faCircleCheck
      break
    case 'warning':
      icon = faExclamationCircle
      break
    default:
      icon = faCircleXmark
      break
  }

  return (
    <Modal
      {...props}
      dialogClassName={styles.customDialog}
      contentClassName={styles.customContent}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body className={classNames('text-end')}>
        <div className={styles.contentWrapper}>
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              className={classNames(styles.icon, {
                'text-success': type === 'success',
                'text-warning': type === 'warning',
                'text-danger': type === 'error'
              })}
            />
          )}
          <div>
            <span>{title}</span>
            <p>{message}</p>
          </div>
        </div>
        <Button className={styles.closeButton} onClick={props.onHide}>
          ปิด
        </Button>
      </Modal.Body>
    </Modal>
  )
}

export default InformationModal
