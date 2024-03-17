import * as YF from 'ya-fetch'

export const useFetch = (resource: string | null = '/api') =>
  YF.create({
    resource: resource ?? undefined,
    async onFailure(error) {
      console.log(error)
      throw error
    },
  })
