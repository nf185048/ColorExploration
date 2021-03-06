import React from 'react'
import type { FC } from 'react'
import { Grid } from '@ncr-design-system/react'
import * as Theme from '@ncr-design-system/theme-utils'
import { NCRShades } from '../types'

export const TestingInterface: FC<{
  UIPrimary?: Theme.ColorBase
  UIPrimaryShade?: number
  UISecondary?: Theme.ColorBase
  UISecondaryShade?: number
  UIFill?: Theme.ColorBase
  UIFillShade?: number
  UIBorder?: Theme.ColorBase
  UIBorderShade?: number
  UIText?: Theme.ColorBase
  UITextShade?: number
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
          <Grid item xs={2} style={Box(UIPrimary[UIPrimaryShade as NCRShades])}></Grid>
          <Grid item xs={2} style={Box(UIFill[UIFillShade as NCRShades])}></Grid>
          <Grid item xs={2} style={Box(UIBorder[UIBorderShade as NCRShades])}></Grid>
          <Grid item xs={2} style={Box(UISecondary[UISecondaryShade as NCRShades])}></Grid>
          <Grid item xs={2} style={Box(UIText[UITextShade as NCRShades])}></Grid>
        </Grid>
      </Grid>
    )
  }
