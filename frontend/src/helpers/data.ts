export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader()

      reader.onload = function (event) {
        const base64String = (event.target as FileReader).result?.toString()
        if (base64String) {
          return resolve(base64String)
        }
        reject()
      }

      reader.readAsDataURL(file)
    }
  })
}
