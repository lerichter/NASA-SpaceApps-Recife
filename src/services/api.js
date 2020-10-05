import axios from 'axios'
import { ROOT_URL } from '../constants'

const api = axios.create({
  baseURL: ROOT_URL
})
