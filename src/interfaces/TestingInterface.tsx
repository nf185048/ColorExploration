import React from 'react'
import type { FC } from 'react'
import { Grid } from '@ncr-design-system/react'
import * as Theme from '@ncr-design-system/theme-utils'

export const TestingInterface: FC<{
  UIPrimaryTheme?: Theme.ColorBase //Theme.ColorBase
  UISecondaryTheme?: Theme.ColorBase //Theme.ColorBase
  UIFill?: string //Theme.ColorBase
  UIBorder?: string //Theme.ColorBase
  UIText?: string //Theme.ColorBase
  Mode?: 'light' | 'dark'
}> = (
  {
    UIPrimaryTheme = Theme.generateColor({ main: '000', type: 'light' }),
    UISecondaryTheme = Theme.generateColor({ main: '000', type: 'light' }),
    UIFill = '',
    UIBorder = '',
    UIText = '',
    Mode = 'light'
  }) => {


    // const theme = Theme.generateColor({
    //   main: UIPrimaryTheme as string,
    //   type: Mode
    // })

    const box = (color: any) => {
      return {
        padding: '2em',
        backgroundColor: color
      }
    }

    return (
      <Grid container justify='space-evenly' className='sampleContainer'>
        <Grid container >
          <Grid item xs={2} style={box(UIPrimaryTheme[5])}></Grid>
          <Grid item xs={2} style={box(UISecondaryTheme[5])}></Grid>
          <Grid item xs={2} style={box(UIFill)}></Grid>
          <Grid item xs={2} style={box(UIBorder)}></Grid>
          <Grid item xs={2} style={box(UIText)}></Grid>
        </Grid>
        <Grid container >
          <Grid item xs={2} style={box(UIPrimaryTheme[5])}></Grid>
          <Grid item xs={2} style={box(UIPrimaryTheme[10])}></Grid>
          <Grid item xs={2} style={box(UIPrimaryTheme[20])}></Grid>
          <Grid item xs={2} style={box(UIPrimaryTheme[30])}></Grid>
          <Grid item xs={2} style={box(UIPrimaryTheme[40])}></Grid>
        </Grid>
        <Grid container >
          <Grid item xs={2} style={box(UISecondaryTheme[5])}></Grid>
          <Grid item xs={2} style={box(UISecondaryTheme[10])}></Grid>
          <Grid item xs={2} style={box(UISecondaryTheme[20])}></Grid>
          <Grid item xs={2} style={box(UISecondaryTheme[30])}></Grid>
          <Grid item xs={2} style={box(UISecondaryTheme[40])}></Grid>
        </Grid>
      </Grid>
    )
  }
