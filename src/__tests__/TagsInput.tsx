import React from 'react'
import App from '@/App'
import TagsInput from '@/TagsInput'
import { cleanup, fireEvent, render } from '@testing-library/react'

describe('TagsInput Component', () => {
  afterEach(jest.clearAllMocks)
  afterEach(cleanup)

  it('cria o snapshot do component', () => {
    const container = render(
      <TagsInput
        variant="outlined"
        id="tags"
        name="tags"
        placeholder="add Tags"
        label="tags"
        onSelectTags={() => void 0}
        onDeleteTag={() => () => void 0}
      />
    )
    expect(container.asFragment()).toMatchSnapshot()
  })

  it('deve renderizar as tags enviadas por atributos', () => {
    const emails = ['contato@rarolabs.com.br', 'nao-responda@rarolabs.com.br']

    const { debug } = render(
      <TagsInput
        variant="outlined"
        id="tags"
        name="tags"
        placeholder="add Tags"
        label="tags"
        onSelectTags={() => void 0}
        onDeleteTag={() => () => void 0}
        tags={emails}
      />
    )

    debug()
  })

  it('deve renderizar tags quando preencher o input e pressionar enter', () => {
    const component = render(<App />)
    const inputEl = component.getByPlaceholderText('add Tags')
    fireEvent.change(inputEl, {
      target: { value: 'asd@asd.com' },
    })
    fireEvent.keyDown(inputEl, {
      key: 'Enter',
    })

    expect(component.baseElement).toContainHTML('<span class="MuiChip-label">asd@asd.com</span>')
  })

  it('deve renderizar tags quando preencher o input e pressionar tab', () => {
    const component = render(<App />)
    const inputEl = component.getByPlaceholderText('add Tags')
    fireEvent.change(inputEl, {
      target: { value: 'asd@asd.com' },
    })
    fireEvent.keyDown(inputEl, {
      key: 'Tab',
    })

    expect(component.baseElement).toContainHTML('<span class="MuiChip-label">asd@asd.com</span>')
  })

  it('deve deletar a útima tag criada ao pressionar o botão de backspace', async () => {
    const component = render(<App />)
    const inputEl = component.getByPlaceholderText('add Tags')
    fireEvent.keyDown(inputEl, {
      key: 'Backspace',
    })

    expect(component.queryByText('nao-responda@rarolabs.com.br')).toBeNull()
  })
})
