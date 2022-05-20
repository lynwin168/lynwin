export interface SignupRequest {
  phone: string
  bank_transfer: string
  bank_number: string
  name: string
  lastname: string
  password: string
  auto_bonus: number
  line_account?: string
}

export interface Signup {
  status: boolean
  data: SignupData | SignupErrorData
  message: string
}

export interface SignupErrorData {
  key: {
    [key: string]: string[]
  }
}

export interface SignupData {
  username: string
  account_id: string
  name: string
  lastname: string
  raw_password: string
  phone: string
  auto_bonus: number
}
