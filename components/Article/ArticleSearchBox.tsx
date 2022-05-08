import { FormEvent, FunctionComponent } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

import styles from './ArticleSearchBox.module.scss'

const ArticleSearchBox: FunctionComponent = () => {
  const router = useRouter()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const term = (event.currentTarget.elements[0] as HTMLInputElement).value
    if (!term) return

    router.push({ pathname: '/article', query: { term } })
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className='position-relative'>
        <Form.Control className={styles.searchBox} placeholder='ค้นหาบทความ' />
        <Button type='submit' className={styles.searchButton}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </Form.Group>
    </Form>
  )
}

export default ArticleSearchBox
