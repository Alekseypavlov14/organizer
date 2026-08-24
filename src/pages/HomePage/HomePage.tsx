import { type DateModel, createDateModel, type TimeModel, createTimeModel, type DurationModel, createDurationModel, type MomentModel, createMomentModel, dateFormat, dateValidator, timeFormat, timeValidator, durationFormat, durationValidator, momentFormat, momentValidator } from '@/entities/shared'
import { FloatingAction, floatingActionVariantDanger, floatingActionVariantPrimary } from '@/shared/components/FloatingAction'
import { NotionSettingsForm } from '@/features/notions/form'
import { FloatingActions } from '@/shared/components/FloatingActions'
import { Pagination } from '@/shared/components/Pagination'
import { Container } from '@/shared/components/Container'
import { useState } from 'react'
import { Input } from '@/shared/components/Input'
import { Icon } from '@/shared/components/Icon'
import { Button, buttonVariantDanger, buttonVariantPrimary } from '@/shared/components/Button'
import { PageLayout } from '@/app/layouts'
import { useNotifications } from '@/app/notifications'


export function HomePage() {
  const [dateValue, setDateValue] = useState<DateModel>(createDateModel(Date.now()))
  const [timeValue, setTimeValue] = useState<TimeModel>(createTimeModel(0))
  const [durationValue, setDurationValue] = useState<DurationModel>(createDurationModel(0))
  const [momentValue, setMomentValue] = useState<MomentModel>(createMomentModel(createDateModel(Date.now()), createTimeModel(0)))

  const { createSuccessNotification } = useNotifications()

  return (
    <PageLayout>
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

        <Button variant={buttonVariantPrimary}>Primary</Button>
        <Button variant={buttonVariantDanger}>Danger</Button>
        <Button block>Base</Button>

        <Button variant={buttonVariantPrimary} size='l'>Primary</Button>
        <Button variant={buttonVariantDanger} size='l'>Danger</Button>
        <Button block size='l'>Base</Button>

        <Pagination 
          currentPageIndex={6}
          totalPagesAmount={7}
        />

        <NotionSettingsForm />

        <FloatingActions>
          <FloatingAction onClick={() => createSuccessNotification("Works")}><Icon name="rotate-ccw" size='l' /></FloatingAction>
          <FloatingAction variant={floatingActionVariantDanger}><Icon name='trash' size='l' /></FloatingAction>
          <FloatingAction variant={floatingActionVariantPrimary}><Icon name="check" size='l' /></FloatingAction>
        </FloatingActions>
      </Container>
    </PageLayout>
  )
}
