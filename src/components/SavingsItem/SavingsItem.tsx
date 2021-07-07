import React from 'react'
import type { FC } from 'react'
import { Card, Grid, Typography } from '@ncr-design-system/react'
import { Cart } from '../../assets'

export const SavingsItem: FC<{
  title: string,
  secondaryFill: any,
  icon: 'cart'
}> = ({
  title = 'Item',
  secondaryFill = undefined,
  icon = 'cart'
}) => {
    const savingsContainer = {
      backgroundColor: secondaryFill,
      width: '100%',
      display: 'flex'
    }
    return (
      <Grid container style={savingsContainer}>
        <Card>
          <Grid container>
            <Grid item xs={3}>
              {(icon === 'cart') && <Cart />}
            </Grid>
            <Grid item xs={9}>
              <Typography variant='body' bold>{title}</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    )
  }
