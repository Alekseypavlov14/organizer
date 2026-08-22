import type { NotionEntity } from '@/entities/notions'
import { type DateModel, createDateModel, type TimeModel, createTimeModel, type DurationModel, createDurationModel, type MomentModel, createMomentModel, dateFormat, dateValidator, timeFormat, timeValidator, durationFormat, durationValidator, momentFormat, momentValidator } from '@/entities/shared'
import { NotionFeed, notionFeedVariantList, type NotionFeedVariant } from '@/features/notions/feed'
import { floatingActionVariantPrimary } from '@/shared/components/FloatingAction/constants'
import { NotionSettingsForm } from '@/features/notions/form'
import { FloatingActions } from '@/shared/components/FloatingActions'
import { FloatingAction } from '@/shared/components/FloatingAction'
import { Pagination } from '@/shared/components/Pagination'
import { Container } from '@/shared/components/Container'
import { useState } from 'react'
import { Wrapper } from '@/shared/components/Wrapper'
import { Input } from '@/shared/components/Input'
import { Icon } from '@/shared/components/Icon'

const notions: NotionEntity[] = [
  {
    id: 1,
    title: 'Finish frontend portfolio',
    description: 'Complete the portfolio website and publish it.',
    date: null,
    time: null,
    duration: null,
    deadline: null,
    done: null,
    priority: 'important',
    progress: 'processing',
    level: 'medium',
  },
  {
    id: 2,
    title: 'Learn React Server Components',
    description: 'Study server and client component boundaries.',
    date: null,
    time: null,
    duration: null,
    deadline: null,
    done: null,
    priority: 'base',
    progress: 'created',
    level: 'medium',
  },
  {
    id: 3,
    title: 'Update CV',
    description: 'Add recent projects, achievements, and technical skills.',
    date: null,
    time: null,
    duration: null,
    deadline: null,
    done: null,
    priority: 'important',
    progress: 'processing',
    level: 'easy',
  },
  {
    id: 4,
    title: 'Apply to frontend positions',
    description: 'Find suitable React and TypeScript positions.',
    date: null,
    time: null,
    duration: null,
    deadline: null,
    done: null,
    priority: 'important',
    progress: 'processing',
    level: 'medium',
  },
  {
    id: 5,
    title: 'Refactor Flex component',
    description: 'Improve the Flex component API and CSS module structure.',
    date: null,
    time: null,
    duration: null,
    deadline: null,
    done: null,
    priority: 'base',
    progress: 'created',
    level: 'easy',
  },
  {
    id: 6,
    title: 'Build QR code generator',
    description: 'Finish QR generation and export functionality.',
    date: null,
    time: null,
    duration: null,
    deadline: null,
    done: null,
    priority: 'important',
    progress: 'processing',
    level: 'hard',
  },
  {
    id: 7,
    title: 'Read about Next.js caching',
    description: 'Review caching, revalidation, and server-side data fetching.',
    date: null,
    time: null,
    duration: null,
    deadline: null,
    done: null,
    priority: 'base',
    progress: 'created',
    level: 'medium',
  },
  {
    id: 8,
    title: 'Clean up NPM packages',
    description: 'Review existing packages and improve their documentation.',
    date: null,
    time: null,
    duration: null,
    deadline: null,
    done: null,
    priority: 'base',
    progress: 'processing',
    level: 'medium',
  },
  {
    id: 9,
    title: 'Practice German',
    description: 'Learn basic vocabulary and practice simple sentences.',
    date: null,
    time: null,
    duration: null,
    deadline: null,
    done: null,
    priority: 'base',
    progress: 'created',
    level: 'easy',
  },
  {
    id: 10,
    title: 'Plan hiking trip',
    description: 'Choose a route and plan transportation and equipment.',
    date: null,
    time: null,
    duration: null,
    deadline: null,
    done: null,
    priority: 'base',
    progress: 'created',
    level: 'easy',
  }
]

export function HomePage() {
  const [dateValue, setDateValue] = useState<DateModel>(createDateModel(Date.now()))
  const [timeValue, setTimeValue] = useState<TimeModel>(createTimeModel(0))
  const [durationValue, setDurationValue] = useState<DurationModel>(createDurationModel(0))
  const [momentValue, setMomentValue] = useState<MomentModel>(createMomentModel(createDateModel(Date.now()), createTimeModel(0)))

  const [variant, setVariant] = useState<NotionFeedVariant>(notionFeedVariantList)

  return (
    <Wrapper>
      <Container>
        <Input 
          value={dateFormat.toControl(dateValue)}
          onValueChange={(value) => setDateValue(dateFormat.toModel(value))}
          format={(value) => `Date: ${dateFormat.displayControl(value)}`}
          validate={dateValidator.validateControlValue}
          placeholder='Date'
          hint="DD.MM.YYYY"
        />
        
        <Input 
          value={timeFormat.toControl(timeValue)}
          onValueChange={(value) => setTimeValue(timeFormat.toModel(value))}
          format={(value) => `Time: ${timeFormat.displayControl(value)}`}
          validate={timeValidator.validateControlValue}
          placeholder='Time'
          hint="hh:mm"
        />

        <Input 
          value={durationFormat.toControl(durationValue)}
          onValueChange={(value) => setDurationValue(durationFormat.toModel(value))}
          format={(value) => `Duration: ${durationFormat.displayControl(value)}`}
          validate={durationValidator.validateControlValue}
          placeholder='Duration'
          hint="DD:hh:mm"
        />

        <Input 
          value={momentFormat.toControl(momentValue)}
          onValueChange={(value) => setMomentValue(momentFormat.toModel(value))}
          format={(value) => `Moment: ${momentFormat.displayControl(value)}`}
          validate={momentValidator.validateControlValue}
          placeholder='Moment'
          hint="DD.MM.YYYY hh:mm"
        />

        <Pagination 
          currentPageIndex={6}
          totalPagesAmount={7}
        />

        <NotionSettingsForm />

        <FloatingActions>
          <FloatingAction><Icon name="plus" size='l' /></FloatingAction>
          <FloatingAction variant={floatingActionVariantPrimary}><Icon name="list" size='l' /></FloatingAction>
        </FloatingActions>

        <NotionFeed 
          title='Custom notion feed title'
          notions={notions}
          variant={variant}
          onVariantChange={setVariant}
        />
      </Container>
    </Wrapper>
  )
}
