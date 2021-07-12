import React from 'react'
import type { FC } from 'react'
import { Grid } from '@ncr-design-system/react'
import * as Theme from '@ncr-design-system/theme-utils'
import { NCRShades } from '../types'

export const DigitalOrdering: FC<{
  UIPrimary?: Theme.ColorBase
  UIPrimaryShade?: NCRShades
  UISecondary?: Theme.ColorBase
  UISecondaryShade?: NCRShades
  UIFill?: Theme.ColorBase
  UIFillShade?: NCRShades
  UIBorder?: Theme.ColorBase
  UIBorderShade?: NCRShades
  UIText?: Theme.ColorBase
  UITextShade?: NCRShades
}> = (
  {
    UIPrimary = Theme.generateColor({ main: '000', type: 'light' }),
    UISecondary = Theme.generateColor({ main: '000', type: 'light' }),
    UIFill = Theme.generateColor({ main: '000', type: 'light' }),
    UIBorder = Theme.generateColor({ main: '000', type: 'light' }),
    UIText = Theme.generateColor({ main: '000', type: 'light' }),
    UIPrimaryShade = 50,
    UISecondaryShade = 50,
    UIFillShade = 50,
    UIBorderShade = 50,
    UITextShade = 50,
  }) => {

    const Box = (color: any) => {
      return {
        padding: '2em',
        backgroundColor: color
      }
    }

    return (
      <Grid container justify='space-evenly' className='sampleContainer'>
        <Grid container >
          <Grid item xs={2} style={Box(UIPrimary[UIPrimaryShade])}></Grid>
          <Grid item xs={2} style={Box(UIFill[UIFillShade])}></Grid>
          <Grid item xs={2} style={Box(UIBorder[UIBorderShade])}></Grid>
          <Grid item xs={2} style={Box(UISecondary[UISecondaryShade])}></Grid>
          <Grid item xs={2} style={Box(UIText[UITextShade])}></Grid>
        </Grid>
      </Grid>
    )
  }
