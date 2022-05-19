import type { NextPage } from 'next'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

import * as apiService from '@/services/api.service'
import styles from '@/styles/Signup.module.scss'
import CardView from '@/components/Common/CardView'
import { SignupRequest } from '@/models/signup.model'
import { SigninRequest } from '@/models/signin.model'

interface FormInputs {
  phone: string
  password: string
  bank_transfer: string
  bank_number: string
  name: string
  lastname: string
  auto_bonus: boolean
  line_account?: string
}

const Signup: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FormInputs>()

  const onSubmit = (data: FormInputs) => {
    const body: SignupRequest = {
      ...data,
      auto_bonus: Number(data.auto_bonus)
    }

    apiService.signup(body).then((response) => {
      const { username, raw_password } = response.data
      const body: SigninRequest = {
        username,
        password: raw_password,
        return_url: 'https://lynwin168.com/signin?incorrect=true'
      }
      apiService.signin(body)
    })
  }

  return (
    <div className={styles.signupSection}>
      <Container className={styles.signupContainer}>
        <Row>
          <Col lg={7} md={12}>
            <CardView className={styles.signupFormCardView}>
              <div className='text-center mb-4'>
                <Link href='/'>
                  <a>
                    <Image src='/images/header-logo.webp' alt='logo' unoptimized width={304} height={50} />
                  </a>
                </Link>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className='mb-3'>
                  <Form.Label>เบอร์โทรศัพท์</Form.Label>
                  <Form.Control
                    placeholder='เบอร์โทรศัพท์'
                    type='text'
                    {...register('phone', { required: { value: true, message: 'โปรดระบุ เบอร์โทรศัพท์' } })}
                  />
                  {errors?.phone && <Form.Text className='text-danger'>{errors.phone.message}</Form.Text>}
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>รหัสผ่าน</Form.Label>
                  <Form.Control
                    placeholder='รหัสผ่าน'
                    type='password'
                    {...register('password', {
                      required: { value: true, message: 'โปรดระบุ รหัสผ่าน' },
                      minLength: { value: 8, message: 'โปรดระบุ รหัสผ่านอย่างน้อย 8 ตัว' }
                    })}
                  />
                  {errors?.password && <Form.Text className='text-danger'>{errors.password.message}</Form.Text>}
                </Form.Group>
                <Form.Group className='form-group-with-icon mb-3'>
                  <Form.Label>ธนาคาร</Form.Label>
                  <Form.Select
                    placeholder='ธนาคาร'
                    {...register('bank_transfer', {
                      required: { value: true, message: 'โปรดระบุ ธนาคาร' }
                    })}
                  >
                    <option value='scb'>ธนาคารไทยพาณิชย์</option>
                    <option value='ktb'>ธนาคารกรุงไทย</option>
                    <option value='bbl'>ธนาคารกรุงเทพ</option>
                    <option value='kbank'>ธนาคารกสิกรไทย</option>
                    <option value='tmb'>ธนาคารทหารไทย</option>
                    <option value='ttb'>ทีเอ็มบีธนชาต (ttb)</option>
                    <option value='bay'>ธนาคารกรุงศรีอยุธยา</option>
                    <option value='baac'>ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร</option>
                    <option value='cimbt'>ธนาคาร ซีไอเอ็มบี</option>
                    <option value='uobt'>ธนาคารยูโอบี</option>
                    <option value='gsb'>ธนาคารออมสิน</option>
                    <option value='tbank'>ธนาคารธนชาต</option>
                    <option value='ghb'>ธนาคารอาคารสงเคราะห์</option>
                    <option value='isbt'>ธนาคารอิสลามแห่งประเทศไทย</option>
                    <option value='kkp'>ธนาคารเกียรตินาคิน</option>
                    <option value='lhbank'>ธนาคารแลนด์ แอนด์ เฮ้าส์</option>
                    <option value='icbc'>ธนาคารไอซีบีซี (ไทย)</option>
                    <option value='tisco'>ธนาคารทิสโก้</option>
                    <option value='truew'>บัญชี ทรูมันนี่ วอลเล็ท</option>
                  </Form.Select>
                  {errors?.bank_transfer && (
                    <Form.Text className='text-danger'>{errors.bank_transfer.message}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>เลขที่บัญชี</Form.Label>
                  <Form.Control
                    placeholder='เลขที่บัญชี'
                    type='number'
                    {...register('bank_number', {
                      required: { value: true, message: 'โปรดระบุ เลขที่บัญชี' }
                    })}
                  />
                  {errors?.bank_number && <Form.Text className='text-danger'>{errors.bank_number.message}</Form.Text>}
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>ชื่อ</Form.Label>
                      <Form.Control
                        placeholder='ใช้ชื่อที่ตรงกับชื่อบัญชีเท่านั้น'
                        type='text'
                        {...register('name', {
                          required: { value: true, message: 'โปรดระบุ ชื่อ' }
                        })}
                      />
                      {errors?.name && <Form.Text className='text-danger'>{errors.name.message}</Form.Text>}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>นามสกุล</Form.Label>
                      <Form.Control
                        placeholder='นามสกุล'
                        type='text'
                        {...register('lastname', {
                          required: { value: true, message: 'โปรดระบุ นามสกุล' }
                        })}
                      />
                      {errors?.lastname && <Form.Text className='text-danger'>{errors.lastname.message}</Form.Text>}
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className='mb-3'>
                  <Form.Label>ไลน์ไอดี</Form.Label>
                  <Form.Control placeholder='ไลน์ไอดี' type='text' {...register('line_account')} />
                </Form.Group>
                <Form.Group className='mb-4' controlId='autoBonus'>
                  <Form.Check
                    className='text-white'
                    type='checkbox'
                    label='คลิกเลือกหากต้องการรับโบนัส'
                    {...register('auto_bonus')}
                  />
                </Form.Group>
                <Button
                  size='lg'
                  variant='primary'
                  type='submit'
                  className={classNames(styles.submitButton, 'd-block w-100')}
                >
                  สมัครสมาชิก
                </Button>
              </Form>
            </CardView>
          </Col>
          <Col lg={5} md={12} className={styles.welcomeSection}>
            <div className='position-relative text-center'>
              <h3 className='mb-0'>ยินดีต้อนรับสู่ Lynwin168</h3>
              <p className='mt-3'>
                หากคุณมีบัญชีอยู่แล้ว ?
                <Link href='/signin'>
                  <a className={classNames(styles.signin, 'ms-2')}>เข้าสู่ระบบ</a>
                </Link>
              </p>
              <div className={styles.angPao}>
                <Image src='/images/ic-ang-pao.webp' height={234} width={199} alt='ang pao' unoptimized />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signup
