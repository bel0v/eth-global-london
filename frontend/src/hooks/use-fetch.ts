import * as YF from 'ya-fetch'

export const useFetch = () =>
  YF.create({
    resource: '/api',
    async onFailure(error) {
      console.log(error)
      throw error
    },
  })
