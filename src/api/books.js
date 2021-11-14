import axios from 'axios'
import { urlConfig } from '@/utils/axios'

export const Books = {
    random
}

function random(number) {
    return axios.get(`books/random/${number}`, urlConfig())
}