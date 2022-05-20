import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import classNames from 'classnames'

import * as apiService from '@/services/api.service'
import styles from '@/styles/Signin.module.scss'
import CardView from '@/components/Common/CardView'
import { SigninRequest } from '@/models/signin.model'
import InformationModal from '@/components/Common/InformationModal'

export interface FormInputs {
  username: string
  password: string
}

const Signin: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FormInputs>()
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()
  const { incorrect } = router.query

  useEffect(() => {
    const incorrectData: boolean = incorrect === 'true'
    setShowModal(incorrectData)
  }, [incorrect])

  const handleHideModal = () => {
    setShowModal(false)
  }

  const onSubmit = (data: FormInputs) => {
    const { username, password } = data
    const body: SigninRequest = {
      username,
      password,
      return_url: 'https://luciabet.site/signin?incorrect=true'
    }
    apiService.signin(body)
  }

  return (
    <>
      <div className={styles.signinSection}>
        <Container className={styles.signinContainer}>
          <Row>
            <Col lg={7} md={12}>
              <CardView className={styles.signinFormCardView}>
                <div className='text-center mb-4'>
                  <Link href='/'>
                    <a>
                      <Image src='/images/header-logo.webp' alt='logo' unoptimized width={304} height={50} />
                    </a>
                  </Link>
                </div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className='mb-3'>
                    <Form.Control
                      placeholder='ยูส/เบอร์โทรศัพท์'
                      type='text'
                      {...register('username', { required: { value: true, message: 'โปรดระบุ ยูส/เบอร์โทรศัพท์' } })}
                    />
                    {errors?.username && <Form.Text className='text-danger'>{errors.username.message}</Form.Text>}
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Control
                      placeholder='รหัสผ่าน'
                      type='password'
                      {...register('password', {
                        required: { value: true, message: 'โปรดระบุ รหัสผ่าน' }
                      })}
                    />
                    {errors?.password && <Form.Text className='text-danger'>{errors.password.message}</Form.Text>}
                  </Form.Group>
                  <Button
                    size='lg'
                    variant='primary'
                    type='submit'
                    className={classNames(styles.submitButton, 'd-block w-100')}
                  >
                    เข้าสู่ระบบ
                  </Button>
                </Form>
              </CardView>
            </Col>
            <Col lg={5} md={12} className={styles.welcomeSection}>
              <div className='position-relative'>
                <h3 className='mb-0'>ยินดีต้อนรับสู่ Lynwin168</h3>
                <p className='mt-3'>
                  หากคุณยังไม่มีบัญชี ?
                  <Link href='/signup'>
                    <a className={classNames(styles.signup, 'ms-2')}>สมัครสมาชิก</a>
                  </Link>
                </p>
                <div className={styles.penguinIcon}>
                  <Image src='/images/home-penguin.webp' width={174} height={280} alt='penguin' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <InformationModal
        type='error'
        title='เกิดข้อผิดพลาด'
        message='ยูส/เบอร์โทรศัพท์ หรือรหัสผ่านไม่ถูกต้อง'
        show={showModal}
        onHide={handleHideModal}
      />
    </>
  )
}

export default Signin
