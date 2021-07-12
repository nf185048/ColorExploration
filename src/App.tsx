import React, { useState } from 'react'
import type { FC } from 'react'
import { ISelectedValue } from '@ncr-design-system/core'
import { Select, Option, Label, Grid, Tab, Tabs, Typography } from '@ncr-design-system/react'
import './App.css'
import { SCOInterface, SCOWelcome, TestingInterface } from './interfaces'
import * as Theme from '@ncr-design-system/theme-utils'
import { handleColorInput } from './helpers'
import { NCRShades, ThemeInput } from './types'
import { useColorInput } from './hooks'

const App: FC<{}> = () => {
  const [UIPrimary, UIPrimaryShade, UIPrimaryInput] = useColorInput('Primary Hex', 'Shade')
  const [UISecondary, UISecondaryShade, UISecondaryInput] = useColorInput('Secondary Hex', 'Shade')
  const [UIFill, UIFillShade, UIFillInput] = useColorInput('Fill Hex', 'Shade')
  const [UIBorder, UIBorderShade, UIBorderInput] = useColorInput('Border Hex', 'Shade')
  const [UIText, UITextShade, UITextInput] = useColorInput('Text Hex', 'Shade')
  const [Mode, setMode] = useState<ISelectedValue[]>([{ name: 'Light', value: 'light' }])
  const [sampleInterface, setInterface] = useState<string>('eliza')

  const handleModeChange = (e: any) => setMode(e.detail)

  const themeInput: ThemeInput = {
    UIPrimary: Theme.generateColor({
      main: handleColorInput(UIPrimary as string),
      type: Mode[0].value
    }),
    UISecondary: Theme.generateColor({
      main: handleColorInput(UISecondary as string),
      type: Mode[0].value
    }),
    UIFill: Theme.generateColor({
      main: handleColorInput(UIFill as string),
      type: Mode[0].value
    }),
    UIBorder: Theme.generateColor({
      main: handleColorInput(UIBorder as string),
      type: Mode[0].value
    }),
    UIText: Theme.generateColor({
      main: handleColorInput(UIText as string),
      type: Mode[0].value
    }),
    UIPrimaryShade: (UIPrimaryShade as NCRShades),
    UISecondaryShade: (UISecondaryShade as NCRShades),
    UIFillShade: (UIFillShade as NCRShades),
    UIBorderShade: (UIBorderShade as NCRShades),
    UITextShade: (UITextShade as NCRShades)
  }


  const handleTabChange = (e: CustomEvent<string>) => {
    setInterface(e.detail)
  }

  return (
    <Grid container spacing={3} className='defaultContainer'>
      <Grid container item xs={12}>
        <Typography variant='title1'>
          NCR Color Book
        </Typography>
      </Grid>

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

      <Tabs
        onNcrChanged={handleTabChange}
        hideTrack
        value={sampleInterface}
      >
        {/* <Tab value='sample'>Sample</Tab> */}
        <Tab value='sco'>SCO | Cart</Tab>
        <Tab value='scoWelcome'>SCO | Welcome</Tab>
      </Tabs>

      <Grid container className='interfaceContainer'>


        {/* {(sampleInterface === 'sample') && (
          <TestingInterface
            theme={themeInput}
          />
        )} */}
        {(sampleInterface === 'sco') && (
          <SCOInterface
            UIPrimary={themeInput.UIPrimary}
            UISecondary={themeInput.UISecondary}
            UIFill={themeInput.UIFill}
            UIBorder={themeInput.UIBorder}
            UIText={themeInput.UIText}
            UIPrimaryShade={(themeInput.UIPrimaryShade) as NCRShades}
            UISecondaryShade={(themeInput.UISecondaryShade) as NCRShades}
            UIFillShade={(themeInput.UIFillShade) as NCRShades}
            UIBorderShade={(themeInput.UIBorderShade) as NCRShades}
            UITextShade={(themeInput.UITextShade) as NCRShades}
          />
        )}
        {(sampleInterface === 'scoWelcome') && (
          <SCOWelcome
            UIPrimary={themeInput.UIPrimary}
            UISecondary={themeInput.UISecondary}
            UIFill={themeInput.UIFill}
            UIBorder={themeInput.UIBorder}
            UIText={themeInput.UIText}
            UIPrimaryShade={(UIPrimaryShade) as NCRShades}
            UISecondaryShade={(UISecondaryShade) as NCRShades}
            UIFillShade={(UIFillShade) as NCRShades}
            UIBorderShade={(UIBorderShade) as NCRShades}
            UITextShade={(UITextShade) as NCRShades}
          />
        )}
      </Grid>
    </Grid>
  )
}

export default App