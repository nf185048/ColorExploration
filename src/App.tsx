import React, { useState } from 'react'
import type { FC } from 'react'
import { ISelectedValue } from '@ncr-design-system/core'
import { Select, Option, Label, Grid } from '@ncr-design-system/react'
import './App.css'
import { BankingInterface } from './interfaces'


const App: FC<{}> = () => {
  const [primaryFillColor, setPrimaryFillColor] = useState<ISelectedValue[]>([{ name: 'white', value: 'white' }])
  const [secondaryFillColor, setSecondaryFillColor] = useState<ISelectedValue[]>([{ name: '#F1F1F1', value: '#F1F1F1' }])
  const [primaryTextColor, setPrimaryTextColor] = useState<ISelectedValue[]>([{ name: 'black', value: 'black' }])
  const [secondaryTextColor, setSecondaryTextColor] = useState<ISelectedValue[]>([{ name: 'black', value: 'black' }])
  const [primaryGraphicsColor, setPrimaryGraphicsColor] = useState<ISelectedValue[]>([{ name: 'red', value: 'red' }])
  const [secondaryGraphicsColor, setSecondaryGraphicsColor] = useState<ISelectedValue[]>([{ name: '#E08585', value: '#E08585' }])

  const handlePrimaryFillChange = (e: any) => setPrimaryFillColor(e.detail)
  const handleSecondaryFillChange = (e: any) => setSecondaryFillColor(e.detail)
  const handlePrimaryTextChange = (e: any) => setPrimaryTextColor(e.detail)
  const handleSecondaryTextChange = (e: any) => setSecondaryTextColor(e.detail)
  const handlePrimaryGrpahicsChange = (e: any) => setPrimaryGraphicsColor(e.detail)
  const handleSecondaryGraphicsChange = (e: any) => setSecondaryGraphicsColor(e.detail)

  const dummyColorList = ['White', 'LightCoral', 'Salmon', 'DarkSalmon', 'LightSalmon', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'PaleVioletRed', 'Plum', 'Violet', 'Orchid', 'Fuchsia', 'Chartreuse', 'MediumSpringGreen', 'LightSeaGreen', 'Teal', 'LightCyan', 'SkyBlue', 'MediumSlateBlue', 'Goldenrod', 'Gold', 'Yellow', 'LightYellow', 'MistyRose', 'Black']

  return (
    <Grid container spacing={3} className='defaultContainer'>

      <Grid item xs={4}>
        <Label>Primary Fill</Label>
        <Select filterInput name='primaryFillColor' value={primaryFillColor} onNcrUpdate={handlePrimaryFillChange}>
          {dummyColorList.map(v => (
            <Option name={v} value={v} />
          ))}
        </Select>
      </Grid>

      <Grid item xs={4}>
        <Label>Secondary Fill</Label>
        <Select filterInput name='secondaryFillColor' value={secondaryFillColor} onNcrUpdate={handleSecondaryFillChange}>
          {dummyColorList.map(v => (
            <Option name={v} value={v} />
          ))}
        </Select>
      </Grid>

      <Grid item xs={4}>
        <Label>Primary Text</Label>
        <Select filterInput name='primaryTextColor' value={primaryTextColor} onNcrUpdate={handlePrimaryTextChange}>
          {dummyColorList.map(v => (
            <Option name={v} value={v} />
          ))}
        </Select>
      </Grid>

      <Grid item xs={4}>
        <Label>Secondary Text</Label>
        <Select filterInput name='secondaryTextColor' value={secondaryTextColor} onNcrUpdate={handleSecondaryTextChange}>
          {dummyColorList.map(v => (
            <Option name={v} value={v} />
          ))}
        </Select>
      </Grid>

      <Grid item xs={4} >
        <Label>Primary Grpahics</Label>
        <Select style={{ paddingBottom: '1em' }} filterInput name='graphicsColor' value={primaryGraphicsColor} onNcrUpdate={handlePrimaryGrpahicsChange}>
          {dummyColorList.map(v => (
            <Option name={v} value={v} />
          ))}
        </Select>

        <Label>Secondary Graphics</Label>
        <Select filterInput name='graphicsColor' value={secondaryGraphicsColor} onNcrUpdate={handleSecondaryGraphicsChange}>
          {dummyColorList.map(v => (
            <Option name={v} value={v} />
          ))}
        </Select>
      </Grid>

      <div className='selectBorder' />

      <BankingInterface
        primaryFillColor={primaryFillColor[0].value}
        secondaryFillColor={secondaryFillColor[0].value}
        primaryTextColor={primaryTextColor[0].value}
        secondaryTextColor={secondaryTextColor[0].value}
        primaryGraphicsColor={primaryGraphicsColor[0].value}
        secondaryGraphicsColor={secondaryGraphicsColor[0].value}
      />
    </Grid>
  )
}

export default App