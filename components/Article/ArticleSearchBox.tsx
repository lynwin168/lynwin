import { FunctionComponent } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import styles from './ArticleSearchBox.module.scss'

import FormWrapper from '../Common/FormWrapper'

interface FormInputs {
  term: string
}

const ArticleSearchBox: FunctionComponent = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<FormInputs>()

  const onSubmit = (data: FormInputs) => {
    router.push({
      pathname: '/article',
      query: { term: data.term }
    })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className='position-relative'>
        <FormWrapper>
          <Form.Control
            className={styles.searchBox}
            placeholder='ค้นหาบทความ'
            {...register('term', { required: true })}
          />
        </FormWrapper>
        <Button type='submit' className={styles.searchButton}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </Form.Group>
    </Form>
  )
}

export default ArticleSearchBox
