import React, { useState } from 'react'
import type { FC } from 'react'
import { ISelectedValue } from '@ncr-design-system/core'
import { Select, Option, Label, Grid } from '@ncr-design-system/react'
import './App.css'
import { SCOInterface } from './interfaces'
import * as Theme from '@ncr-design-system/theme-utils'
import { useInput, handleColorInput } from './helpers'


const App: FC<{}> = () => {
  const [UIPrimary, UIPrimaryInput] = useInput('Insert Primary Hex Value')
  const [UISecondary, UISecondaryInput] = useInput('Insert Secondary Hex Value')
  const [UIFill, UIFillInput] = useInput('Insert Fill Hex Value')
  const [UIBorder, UIBorderInput] = useInput('Insert Border Hex Value')
  const [UIText, UITextInput] = useInput('Insert Text Hex Value')
  const [Mode, setMode] = useState<ISelectedValue[]>([{ name: 'Light', value: 'light' }])

  const handleModeChange = (e: any) => setMode(e.detail)

  const primaryTheme = Theme.generateColor({
    main: handleColorInput(UIPrimary as string),
    type: Mode[0].value
  })

  const secondaryTheme = Theme.generateColor({
    main: handleColorInput(UISecondary as string),
    type: Mode[0].value
  })

  const fillTheme = Theme.generateColor({
    main: handleColorInput(UIFill as string),
    type: Mode[0].value
  })

  const borderTheme = Theme.generateColor({
    main: handleColorInput(UIBorder as string),
    type: Mode[0].value
  })

  const textTheme = Theme.generateColor({
    main: handleColorInput(UIText as string),
    type: Mode[0].value
  })


  return (
    <Grid container spacing={3} className='defaultContainer'>
      <Grid item xs={4}>
        <Label>UI Primary</Label>
        {UIPrimaryInput}
      </Grid>

      <Grid item xs={4}>
        <Label>UI Fill</Label>
        {UIFillInput}
      </Grid>

      <Grid item xs={4}>
        <Label>UI Border</Label>
        {UIBorderInput}
      </Grid>

      <Grid item xs={4}>
        <Label>UI Secondary</Label>
        {UISecondaryInput}
      </Grid>

      <Grid item xs={4}>
        <Label>UI Text</Label>
        {UITextInput}
      </Grid>

      <Grid item xs={4}>
        <Label>Display Mode</Label>
        <Select filterInput name='Mode' value={Mode} onNcrUpdate={handleModeChange}>
          <Option name='Light' value='light' />
          <Option name='Dark' value='dark' />
        </Select>
      </Grid>

      <div className='selectBorder' />
      <Grid container className='interfaceContainer'>
        <SCOInterface
          UIPrimary={primaryTheme}
          UISecondary={secondaryTheme}
          UIFill={fillTheme}
          UIBorder={borderTheme}
          UIText={textTheme}
        />
      </Grid>
    </Grid>
  )
}

export default App