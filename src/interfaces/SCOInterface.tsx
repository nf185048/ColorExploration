import React from 'react'
import type { FC } from 'react'
import { Grid, Header } from '@ncr-design-system/react'
import * as Theme from '@ncr-design-system/theme-utils'
import './style.css'

export const SCOInterface: FC<{
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
    return (
      <Grid container justify='space-evenly' className='SCOContainer'>
        <Header>

        </Header>
      </Grid>
    )
  }
