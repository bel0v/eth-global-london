import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import styled from 'styled-components'

const Label = styled.label`
  width: 100%;
`

interface FileUploadInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onFileSelect: (files: File[]) => void
  children: React.ReactNode
}

export function FileUploadInput({
  onFileSelect,
  children,
  ...inputProps
}: FileUploadInputProps) {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return
    }
    onFileSelect?.(Array.from(event.target.files))
  }
  return (
    <Label>
      <VisuallyHidden.Root>
        <input type="file" {...inputProps} onChange={onInputChange} />
      </VisuallyHidden.Root>
      {children}
    </Label>
  )
}
