import React, { useState } from 'react'
import TagsInput from './TagsInput'

export interface deleteOptions {
  item?: string
  deleteLast?: boolean
}

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([
    'contato@rarolabs.com.br',
    'nao-responda@rarolabs.com.br',
  ])

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email.toLowerCase())
  }

  const handleSelecetedTags = (items: string | string[]) => {
    if (items instanceof Array) {
      items = items.filter((it: string) => validateEmail(it) && !tags.includes(it))
      setTags([...tags, ...items])
      return
    }
    if (validateEmail(items) && !tags.includes(items)) setTags([...tags, items])
  }

  const handleDeleteTag = (options: deleteOptions) => {
    const { deleteLast, item } = options
    if (deleteLast) {
      setTags((oldItems) => oldItems.slice(0, -1))
      return
    }
    setTags((oldItems) => oldItems.filter((it: string) => it !== item))
  }

  return (
    <div className="App">
      <TagsInput
        onDeleteTag={(options) => () => handleDeleteTag(options)}
        onSelectTags={handleSelecetedTags}
        fullWidth
        variant="outlined"
        id="tags"
        name="tags"
        placeholder="add Tags"
        label="tags"
        tags={tags}
      />
    </div>
  )
}

export default App
