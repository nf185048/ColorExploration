import React, { useState } from 'react'
import type { FC } from 'react'
import { ISelectedValue } from '@ncr-design-system/core'
import { Select, Option, Label, Grid } from '@ncr-design-system/react'
import './App.css'
import { SCOInterface } from './interfaces'
import { NCRColorList } from './consts'
import * as Theme from '@ncr-design-system/theme-utils'
import { useInput, handleColorInput } from './helpers'


const App: FC<{}> = () => {
  const [UIPrimary, UIPrimaryInput] = useInput('Insert Primary Hex')
  const [UISecondary, UISecondaryInput] = useInput('Insert Primary Hex')
  const [UIFill, setUIFill] = useState<ISelectedValue[]>([{ name: 'UIFill', value: '#F1F1F1' }])
  const [UIBorder, setUIBorder] = useState<ISelectedValue[]>([{ name: 'UIBorder', value: '#F1F1F1' }])
  const [UIText, setUIText] = useState<ISelectedValue[]>([{ name: 'UIText', value: '#F1F1F1' }])
  const [Mode, setMode] = useState<ISelectedValue[]>([{ name: 'Light', value: 'light' }])

  const handleFillChange = (e: any) => setUIFill(e.detail)
  const handleBorderChange = (e: any) => setUIBorder(e.detail)
  const handleTextChange = (e: any) => setUIText(e.detail)
  const handleModeChange = (e: any) => setMode(e.detail)

  const primaryTheme = Theme.generateColor({
    main: handleColorInput(UIPrimary as string),
    type: Mode[0].value
  })

  const secondaryTheme = Theme.generateColor({
    main: handleColorInput(UISecondary as string),
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
        <Select filterInput name='UIFill' value={UIFill} onNcrUpdate={handleFillChange}>
          {Object.keys(NCRColorList).map(v => (
            <Option name={v} value={NCRColorList[v]} />
          ))}
        </Select>
      </Grid>

      <Grid item xs={4}>
        <Label>UI Border</Label>
        <Select filterInput name='UIBorder' value={UIBorder} onNcrUpdate={handleBorderChange}>
          {Object.keys(NCRColorList).map(v => (
            <Option name={v} value={NCRColorList[v]} />
          ))}
        </Select>
      </Grid>

      <Grid item xs={4}>
        <Label>UI Secondary</Label>
        {UISecondaryInput}
      </Grid>

      <Grid item xs={4}>
        <Label>UI Text</Label>
        <Select filterInput name='UIText' value={UIText} onNcrUpdate={handleTextChange}>
          {Object.keys(NCRColorList).map(v => (
            <Option name={v} value={NCRColorList[v]} />
          ))}
        </Select>
      </Grid>

      <Grid item xs={4}>
        <Label>Display Mode</Label>
        <Select filterInput name='Mode' value={Mode} onNcrUpdate={handleModeChange}>
          <Option name='Light' value='light' />
          <Option name='Dark' value='dark' />
        </Select>
      </Grid>

      <div className='selectBorder' />

      <SCOInterface
        UIPrimaryTheme={primaryTheme as Theme.ColorBase}
        UISecondaryTheme={secondaryTheme}
        UIFill={UIFill[0].value}
        UIBorder={UIBorder[0].value}
        UIText={UIText[0].value}
        Mode={Mode[0].value}
      />
    </Grid>
  )
}

export default App