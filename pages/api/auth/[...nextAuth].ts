import { NextApiRequest, NextApiResponse } from 'next'
import { AxiosError } from 'axios'

import { HTTP_METHOD_POST } from '@/utils/constant'
import { SignupRequest } from '@/models/signup.model'
import httpClientLynwin from '@/services/httpClientLynwin'

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { phone, password, bank_transfer, bank_number, name, lastname, auto_bonus, line_account, ref }: SignupRequest =
      req.body

    const formData = new URLSearchParams()
    formData.append('phone', phone)
    formData.append('password', password)
    formData.append('bank_transfer', bank_transfer)
    formData.append('bank_number', bank_number)
    formData.append('name', name)
    formData.append('lastname', lastname)
    formData.append('auto_bonus', Number(auto_bonus).toString())

    const ref_account = ref && (ref === '9' || ref === '12528') ? ref : '6'
    formData.append('referrer_account_id', ref_account)

    if (line_account) {
      formData.append('line_account', line_account)
    }
    const response = await httpClientLynwin.post('/api/user/register', formData)
    res.json(response.data)
  } catch (err) {
    const error = err as Error | AxiosError
    res.status(400).json({ success: false, message: error.message })
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const action = req.query['nextAuth'][0]
  if (req.method === HTTP_METHOD_POST && action === 'signup') {
    return signup(req, res)
  } else {
    return res.status(405).end(`Error: HTTP ${req.method} is not supported for ${req.url}`)
  }
}
