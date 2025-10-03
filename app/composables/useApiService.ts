import { apiMethods } from '~/api/apiMethods'
import type { UseFetchOptions } from 'nuxt/app'

type TUseFetchOptions = UseFetchOptions<unknown, unknown, unknown, unknown>

export default function useApiService(options: TUseFetchOptions = {}) {
  return apiMethods(options)
}
