import React from 'react'
import Chip from '@material-ui/core/Chip'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { OutlinedTextFieldProps } from '@material-ui/core/TextField'

import { deleteOptions } from '@/App'

interface TagsInputProps extends OutlinedTextFieldProps {
  onSelectTags: (items: string[] | string) => void
  onDeleteTag: (options: deleteOptions) => () => void
  tags: string[]
}

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-root': {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
})(TextField)

export default function TagsInput(props: TagsInputProps) {
  const { onSelectTags, onDeleteTag, tags, ...other } = props
  const [value, setValue] = React.useState('')

  return (
    <CssTextField
      onKeyDown={(e) => {
        if (e.key === 'Backspace' && tags.length > 0 && value === '') {
          e.preventDefault()
          onDeleteTag({ deleteLast: true })()
          return
        }
        if (e.key === 'Tab' || e.key === 'Enter') {
          e.preventDefault()
          if (!value.includes(',') && !value.includes(';')) {
            onSelectTags(value)
            setValue('')
            return
          }
          const aux = value.split(/(?:,|;)+/).filter((x) => x)
          const values = aux.length > 1 ? aux : aux[0]
          if (!values) {
            setValue('')
            return
          }
          onSelectTags(values)
          setValue('')
        }
      }}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      InputProps={{
        startAdornment: tags.map((item, idx) => (
          <Chip
            key={`${item}-${idx}`}
            tabIndex={-1}
            label={item}
            onDelete={onDeleteTag({ item })}
            style={{ margin: '10px 2px' }}
          />
        )),
      }}
      {...other}
    />
  )
}
TagsInput.defaultProps = {
  tags: [],
}
