import styled from 'styled-components'
import { TagName } from '../data/types'
const tags = Object.values(
  import.meta.glob('../images/tags/*.svg', { eager: true, as: 'url' })
)

const TagWrapper = styled.div<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? 'var(--bg-warm)' : 'var(--bg-warm-light-80)'};
  border-radius: var(--br-81xl);
  backdrop-filter: blur(20px);
  border: 1px solid var(--blue);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-5xs);
  gap: var(--gap-9xs);
`
const TagImage = styled.img`
  width: 24px;
  height: 24px;
`
const TagTitle = styled.b`
  font-size: var(--font-size-16);
`

const tagLabels: Record<TagName, string> = {
  area: 'Area',
  booth: 'Booth',
  'corner-kick': 'Corner kick',
  dj: 'DJ',
  drinks: 'Drinks',
  entry: 'Entry',
  food: 'Food',
  foul: 'Foul',
  goal: 'Goal',
  'goal-kick': 'Goal kick',
  merch: 'Merch',
  offside: 'Offside',
  player: 'Player',
  speaker: 'Speaker',
}

interface TagProps {
  name: TagName
  active?: boolean
}

export const Tag = ({ name, active = false }: TagProps) => {
  const url = tags.find((tagPath) => tagPath.match(name))
  return (
    <TagWrapper active={active}>
      <TagImage alt="" src={url} />
      <TagTitle>{tagLabels[name]}</TagTitle>
    </TagWrapper>
  )
}
